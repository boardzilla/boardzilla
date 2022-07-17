/* global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */

import assert from 'assert';
import chai from 'chai';
import spies from 'chai-spies';
import { game, Space, Piece, InteractivePiece } from '../';

chai.use(spies);
const { expect } = chai;
let spendSpy: ReturnType<typeof chai.spy>;

const uuidRE = '[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}';

describe('GameInterface', () => {
  beforeEach(() => {
    spendSpy = chai.spy();
    game.reset('test');
    game.setPlayers({ min: 4, max: 4 });

    game.play(async () => {
      game.set('tokens', 4);
      do {
        await game.anyPlayerPlay(['addSome', 'spend']);
        console.log('in turn', game.get('tokens'), game.sequence);
      } while (game.get('tokens') < 8);
      game.setCurrentPlayer(1);
      do {
        await game.playersInTurn(async (turn) => {
          console.log('playersInTurn', turn, game.currentPlayer);
          await game.currentPlayerPlay(['takeOne']);
        });
      } while (game.get('tokens') > 0);
    });

    game.defineActions({
      addSome: {
        prompt: 'add some counters',
        min: 1,
        max: 3,
        action: (n: number) => game.set('tokens', game.get('tokens') as number + n),
      },
      takeOne: {
        prompt: 'take one counter',
        action: () => game.set('tokens', game.get('tokens') as number - 1),
      },
      hi: { prompt: 'hi' },
      spend: {
        select: ['gold', 'silver'],
        prompt: 'Spend resource',
        next: {
          select: [1, 2, 3],
          prompt: 'How much?',
          action: spendSpy,
        },
      },
    });

    game.initialize('rseed');
    game.addPlayers([
      { id: 101, name: 'Joe', color: 'red' },
      { id: 102, name: 'Jane', color: 'green' },
      { id: 103, name: 'Jack', color: 'yellow' },
      { id: 104, name: 'Jen', color: 'purple' },
    ]);
  });

  describe('start', () => {
    it('waits for playerStart', done => {
      game.startProcessing().then(() => assert(false, 'start completed without player start'));
      setTimeout(done, 100);
    });

    it('proceeds with playerStart', async () => {
      game.startProcessing();
      const result = await game.processPlayerStart();
      console.log(result);
    });
  });

  describe('replay', () => {
    it('plays', async () => {
      game.startProcessing();
      await game.processHistory([
        [2, 0, 'addSome', '2'],
        [3, 1, 'addSome', '2'],
        [3, 2, 'addSome', '200'], // will be ignored
        [1, 2, 'takeOne'],
        [2, 3, 'takeOne'],
        [3, 4, 'takeOne'],
        [4, 5, 'takeOne'],
        [4, 6, 'takeOne'], // will be ignored
        [1, 6, 'takeOne'],
        [2, 7, 'takeOne'],
        [3, 8, 'takeOne'],
        [4, 9, 'takeOne'],
      ]);
      expect(game.sequence).equals(10);
    });
  });

  describe('processAction', () => {
    it('can run composite actions', async () => {
      game.startProcessing();
      await game.processPlayerStart();
      console.log('current', game.currentPlayerPosition);
      await game.processAction(1, 0, 'spend', '"gold"', '2');
      expect(spendSpy).to.have.been.called.with('gold', 2);
    });
  });
});

describe('GameDocument', () => {
  beforeEach(() => {
    game.reset('test');
    game.play(async () => {});
  });

  it('renders', () => {
    expect(game.doc.ctx.node.outerHTML).equals(
      '<game><Space class="space" id="board" /><Space class="space" id="pile" /></game>'
    );
  });

  it('creates new spaces', async () => {
    game.setupBoard(board => {
      board.create(Space, '#map', {});
    });
    game.startProcessing();
    await game.processPlayerStart();
    expect(game.doc.ctx.node.outerHTML).equals(
      '<game><Space class="space" id="board"><Space class="space" id="map" /></Space><Space class="space" id="pile" /></game>'
    );
  });

  it('creates new pieces', async () => {
    game.setupBoard(board => {
      board.create(Piece, '#token', { player: 1 });
    });
    game.startProcessing();
    await game.processPlayerStart();
    expect(game.doc.ctx.node.outerHTML).to.match(
      new RegExp(`<game><Space class="space" id="board"><Piece uuid="${uuidRE}" player="1" class="piece" id="token" /></Space><Space class="space" id="pile" /></game>`)
    );
  });

  describe("Element subclasses", () => {
    class Card extends Piece {
      suit: string;
      pip?: number = 1;
      flipped?: boolean = false;
      state?: string = 'initial'; // not ser'd

      static serializable = ['suit', 'pip', 'flipped']
    }

    it('takes attrs', async () => {
      game.setupBoard(board => {
        board.create(Card, '#2H', { suit: 'H', pip: 2 });
      });
      game.startProcessing();
      await game.processPlayerStart();
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(`<game><Space class="space" id="board"><Card uuid="${uuidRE}" pip="2" suit="H" class="piece" id="2H" /></Space><Space class="space" id="pile" /></game>`)
      );
    });

    it('takes base attrs', async () => {
      game.setupBoard(board => {
        board.create(Card, '#2H', { player: 2, suit: 'H', pip: 2 });
      });
      game.startProcessing();
      await game.processPlayerStart();
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(`<game><Space class="space" id="board"><Card uuid="${uuidRE}" player="2" pip="2" suit="H" class="piece" id="2H" /></Space><Space class="space" id="pile" /></game>`)
      );
    });

    it('finds', async () => {
      game.setupBoard(board => {
        board.create(Card, '#AH', { suit: 'H', pip: 1 });
        board.create(Card, '#2H', { suit: 'H', pip: 2 });
        board.create(Card, '#3H', { suit: 'H', pip: 3 });
      });
      game.startProcessing();
      await game.processPlayerStart();
      const card = Card.find('[pip=2]');
      expect(card.pip).equals(2);
    });

    it('modifies', async () => {
      game.setupBoard(board => {
        board.create(Card, '#AH', { suit: 'H', pip: 1 });
        board.create(Card, '#2H', { suit: 'H', pip: 2 });
        board.create(Card, '#3H', { suit: 'H', pip: 3 });
      });
      game.startProcessing();
      await game.processPlayerStart();
      const card = Card.find('[pip=2]');
      card.suit = 'D';
      expect(card.suit).equals('D');
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Card uuid="${uuidRE}" pip="1" suit="H" class="piece" id="AH" />` +
            `<Card uuid="${uuidRE}" pip="2" suit="D" class="piece" id="2H" />` +
            `<Card uuid="${uuidRE}" pip="3" suit="H" class="piece" id="3H" />` +
            `</Space><Space class="space" id="pile" />` +
            `</game>`
        )
      );
    });

    it('takes from pile', async () => {
      game.setupBoard(board => {
        board.create(Card, '#AH', { suit: 'H', pip: 1 });
        board.create(Card, '#2H', { suit: 'H', pip: 2 });
        game.pile.create(Card, '#3H', { suit: 'H', pip: 3 });
      });
      game.startProcessing();
      await game.processPlayerStart();
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Card uuid="${uuidRE}" pip="1" suit="H" class="piece" id="AH" />` +
            `<Card uuid="${uuidRE}" pip="2" suit="H" class="piece" id="2H" />` +
            `</Space>` +
            `<Space class="space" id="pile">` +
            `<Card uuid="${uuidRE}" pip="3" suit="H" class="piece" id="3H" />` +
            `</Space>` +
            `</game>`
        )
      );
      game.board.addFromPile('Card');
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Card uuid="${uuidRE}" pip="1" suit="H" class="piece" id="AH" />` +
            `<Card uuid="${uuidRE}" pip="2" suit="H" class="piece" id="2H" />` +
            `<Card uuid="${uuidRE}" pip="3" suit="H" class="piece" id="3H" />` +
            `</Space>` +
            `<Space class="space" id="pile" />` +
            `</game>`
        )
      );
      game.board.clearIntoPile('Card[pip=1]');
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Card uuid="${uuidRE}" pip="2" suit="H" class="piece" id="2H" />` +
            `<Card uuid="${uuidRE}" pip="3" suit="H" class="piece" id="3H" />` +
            `</Space>` +
            `<Space class="space" id="pile">` +
            `<Card uuid="${uuidRE}" pip="1" suit="H" class="piece" id="AH" />` +
            `</Space>` +
            `</game>`
        )
      );
    });

    it('moves', async () => {
      game.setupBoard(board => {
        const deck = board.create(Space, '#deck', { layout: 'stack' });
        board.create(Space, '#discard', { layout: 'stack' });
        deck.create(Card, '#AH', { suit: 'H', pip: 1 });
        deck.create(Card, '#2H', { suit: 'H', pip: 2 });
        deck.create(Card, '#3H', { suit: 'H', pip: 3 });
      });

      game.startProcessing();
      await game.processPlayerStart();
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Space layout="stack" class="space" id="deck">` +
            `<Card pip="1" suit="H" class="piece" id="AH" />` +
            `<Card pip="2" suit="H" class="piece" id="2H" />` +
            `<Card pip="3" suit="H" class="piece" id="3H" />` +
            `</Space>` +
            `<Space layout="stack" class="space" id="discard" />` +
            `</Space>` +
            `<Space class="space" id="pile" />` +
            `</game>`
        )
      );
      const deck = Space.find('#deck');
      const discard = Space.find('#discard');
      deck.move('Card', discard, 2);
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Space layout="stack" class="space" id="deck">` +
            `<Card pip="1" suit="H" class="piece" id="AH" />` +
            `</Space>` +
            `<Space layout="stack" class="space" id="discard">` +
            `<Card pip="3" suit="H" class="piece" id="3H" />` +
            `<Card pip="2" suit="H" class="piece" id="2H" />` +
            `</Space>` +
            `</Space>` +
            `<Space class="space" id="pile" />` +
            `</game>`
        )
      );
      discard.moveToBottom('Card', deck, 1);
      expect(game.doc.ctx.node.outerHTML).to.match(
        new RegExp(
          `<game>` +
            `<Space class="space" id="board">` +
            `<Space layout="stack" class="space" id="deck">` +
            `<Card pip="2" suit="H" class="piece" id="2H" />` +
            `<Card pip="1" suit="H" class="piece" id="AH" />` +
            `</Space>` +
            `<Space layout="stack" class="space" id="discard">` +
            `<Card pip="3" suit="H" class="piece" id="3H" />` +
            `</Space>` +
            `</Space>` +
            `<Space class="space" id="pile" />` +
            `</game>`
        )
      );
    });
  });
});
