class Player {
  constructor({ name, color, userId, position }) {
    this.name = name;
    this.color = color;
    this.userId = userId;
    this.position = position;
  }

  colorEncodedName() {
    return `<span color="${this.color}">${this.name}</span>`;
  }
}

module.exports = Player;
