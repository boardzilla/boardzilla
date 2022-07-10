import { DOMParser } from 'linkedom/cached';
import Space from './space';
import type GameInterface from './interface';

export default class GameDocument extends Space {
  xmlDoc: XMLDocument;

  constructor(game: GameInterface, xmlDoc?: XMLDocument) {
    const newDoc = !xmlDoc;
    // initial call to build the base DOM
    xmlDoc = xmlDoc || (new DOMParser()).parseFromString('<game/>', 'text/xmlDoc');
    super({ node: xmlDoc!.documentElement, game });

    this.document = this;
    this.xmlDoc = xmlDoc!;
    this.id = 'game';
    if (newDoc) {
      this.addSpace('#board');
      this.addSpace('#pile');
    }
  }

  clone() {
    return new GameDocument(this.game, this.xmlDoc.cloneNode(true) as XMLDocument);
  }

  // return element from branch
  pieceAt(key: string) {
    return this.find(
      `game > ${key.split('-').map(index => `*:nth-child(${index})`).join(' > ')}`,
    );
  }
}
