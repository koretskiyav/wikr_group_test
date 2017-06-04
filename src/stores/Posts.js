import { action, observable, computed, reaction } from 'mobx';
import Base from './Base';

const POSTS_REP_PAGE = 20;

export default class PostsStore extends Base {
  constructor(api, store) {
    super(api, store);
    this.init();
  }

  @observable.shallow data = [];
  @observable page = 1;

  @computed get year() {
    return this.store.routing.location && +this.store.routing.location.query.year;
  }

  @computed get month() {
    return this.store.routing.location && +this.store.routing.location.query.month;
  }

  @computed get list() {
    return this.data.slice(
      POSTS_REP_PAGE * (this.page - 1),
      POSTS_REP_PAGE * this.page,
    );
  }

  @computed get pages() {
    return Math.ceil(this.data.length / POSTS_REP_PAGE);
  }

  init() {
    reaction(
      () => ({ year: this.year, month: this.month }),
      ({ year, month }) => {
        this.data = [];
        if (year && month) {
          this.load(year, month);
        }
      }
    )
  }

  @action async load(year, month) {
    const { docs } = await this.api.posts.list(year, month);
    this.data = docs;
    this.page = 1;
  }

  @action setPage(page) {
    this.page = page;
  }

  @action getDetails(article) {
    const index = this.data.indexOf(article);
    this.store.routing.push(`/posts/${index}?year=${this.year}&month=${this.month}`)
  }
}
