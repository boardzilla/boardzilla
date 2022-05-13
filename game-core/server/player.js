class Player {
  constructor({ name, color, userId }) {
    this.name = name;
    this.color = color;
    this.userId = userId;
  }

  colorEncodedName() {
    return `<span color="${this.color}">${this.name}</span>`;
  }
}

module.exports = Player;
