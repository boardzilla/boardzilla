// @ts-ignore: simply does not work, partly due to https://github.com/microsoft/TypeScript/issues/33079
import { DOMParser } from 'linkedom/cached';
import Space from './space';
import GameElement from './element';
import type GameInterface from './interface';

export default class GameDocument extends Space {
  xmlDoc: XMLDocument;

  constructor(game: GameInterface, xmlDoc?: XMLDocument) {
    const newDoc = !xmlDoc;
    // initial call to build the base DOM
    xmlDoc = xmlDoc || (new (DOMParser as typeof globalThis.DOMParser)()).parseFromString('<game/>', 'text/xml') as XMLDocument;
    // @ts-ignore: we will populate the correct values immediately
    super({ node: xmlDoc.documentElement, game });
    this.ctx.node.gameElement = this;
    this.ctx.document = this;
    this.xmlDoc = xmlDoc;
    this.id = 'game';
    if (newDoc) {
      this.create(Space, '#board', {});
      this.create(Space, '#pile', {});
    }
  }

  reset() {
    this.board().destroyContents('*');
    this.pile().destroyContents('*');
    this.findAll(GameElement, ':not([id=board]):not([id=pile])').forEach(e => {console.log('eis', e.id); e.destroy()});
  }

  clone() {
    return new GameDocument(this.ctx.game, this.xmlDoc.cloneNode() as XMLDocument);
  }

  // return element from branch
  pieceAt(key: string) {
    return this.find(
      GameElement,
      `game > ${key.split('-').map(index => `*:nth-child(${index})`).join(' > ')}`,
    );
  }
}
