export default class Base {
  constructor(api) {
    if (!api) {
      throw new Error('[api] required');
    }
    this.api = api;
  }
}
