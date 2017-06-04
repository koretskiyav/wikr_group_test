import { RouterStore } from 'mobx-react-router';
import Api from 'api';
import Posts from './Posts';
import { API_KEY, API_PREFIX } from 'config';

export default class Store {
  api = new Api(API_PREFIX, API_KEY);
  routing = new RouterStore();
  posts = new Posts(this.api, this);
}
