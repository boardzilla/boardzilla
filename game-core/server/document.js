const { DOMParser } = require('linkedom/cached');
const Space = require('./space');

class GameDocument extends Space {
  constructor(game, xmlDoc) {
    const newDoc = !xmlDoc;
    // initial call to build the base DOM
    xmlDoc = xmlDoc || (new DOMParser()).parseFromString('<game/>', 'text/xmlDoc');
    super({ node: xmlDoc.getRootNode() });

    this.document = this;
    this.game = game;
    this.xmlDoc = xmlDoc;
    this.id = 'game';
    if (newDoc) {
      this.addSpace('#board');
      this.addSpace('#pile');
    }
  }

  clone() {
    return new GameDocument(this.game, this.xmlDoc.cloneNode(true));
  }

  // return element from branch
  pieceAt(key) {
    return this.find(
      `game > ${key.split('-').map(index => `*:nth-child(${index})`).join(' > ')}`,
    );
  }
}

module.exports = GameDocument;
