class Player {
  constructor({ name, color, userId, position }) {
    this.name = name;
    this.color = color;
    this.userId = userId;
    this.position = position; // table position, as opposed to turn order
  }

  colorEncodedName() {
    return `<span color="${this.color}">${this.name}</span>`;
  }
}

module.exports = Player;
