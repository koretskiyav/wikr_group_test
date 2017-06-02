import Base from './Base';

export default class PostsAPI extends Base {
  list(yaer, month) {
    if (!yaer || !month) {
      throw new Error('[yaer] and [month] required');
    }

    return this.apiClient.get(`/archive/v1/${yaer}/${month}.json`);
  }
}
