import ApiClient from './ApiClient';
import PostsAPI from './Posts';

export default class Api {
  constructor(apiPrefix, apiKey) {
    if (!apiPrefix) {
      throw new Error('[apiPrefix] required');
    }

    if (!apiKey) {
      throw new Error('[apiKey] required');
    }

    this.apiClient = new ApiClient(apiPrefix, apiKey);
    this.posts = new PostsAPI(this.apiClient);
  }
}
