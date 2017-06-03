import { action, observable } from 'mobx';
import Base from './Base';

export default class PostsStore extends Base {
  @observable list;

  @action async load(year, month) {
    const response = this.api.list(year, month);
    console.log(response);
  }
}
