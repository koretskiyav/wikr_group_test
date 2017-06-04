export default class Base {
  constructor(api, store) {
    if (!api) {
      throw new Error('[api] required');
    }
    if (!store) {
      throw new Error('[store] required');
    }
    this.api = api;
    this.store = store;
  }
}
