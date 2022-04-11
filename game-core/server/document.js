const GameElement = require('./element');
const Space = require('./space');
const { DOMParser } = require("linkedom");

class GameDocument extends Space {
  constructor(node, caller) {
    let document = caller.document ||
                   // initial call to build the base DOM
                   (new DOMParser).parseFromString('<game><board id="board" class="space"></board><pile class="space"></pile></game>', 'text/xml')

    super(document.getRootNode(), { game: caller.game, document })
  }

  clone() {
    const document = this.document.cloneNode(true);
    return new GameDocument(document, {game: this.game, document});
  }
}

GameElement.wrapNodeAs(0, GameDocument, node => !node.parentNode);

module.exports = GameDocument
