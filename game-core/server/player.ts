export default class Player {
  constructor(
    public name: string,
    public color: string,
    public userId: number,
    public position: number // table position, as opposed to turn order
  ) {
  }

  colorEncodedName() {
    return `<span color="${this.color}">${this.name}</span>`;
  }
}
