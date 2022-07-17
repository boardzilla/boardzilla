export default class Player {
  attrs: Record<string, string | number | boolean>;

  constructor(
    public name: string,
    public color: string,
    public userId: number,
    public position: number // table position, as opposed to turn order
  ) {
  }

  get(key: string) {
    return this.attrs[key];
  }

  /**
   * set player properties
   * set({ attr1: newValue, attr2: newValue,... })
   */
  set(attrs: Record<string, string | number | boolean>) {
    Object.entries(attrs).forEach(([n, v]) => this.attrs[n] = v);
  }

  colorEncodedName() {
    return `<span color="${this.color}">${this.name}</span>`;
  }
}
