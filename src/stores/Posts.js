import { action, observable, computed } from 'mobx';
import Base from './Base';

export default class PostsStore extends Base {
  @computed get year() {
    return this.store.routing.location.query.year;
  }
  @computed get month() {
    return this.store.routing.location.query.month;
  }

  @observable list;

  @action async load(year, month) {
    const response = this.api.list(year, month);
    console.log(response);
  }
}
