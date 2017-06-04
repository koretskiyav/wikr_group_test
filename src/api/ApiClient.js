import axios from 'axios';

export default class ApiClient {
  constructor(apiPrefix, apiKey) {
    if (!apiPrefix) {
      throw new Error('[apiPrefix] required');
    }

    if (!apiKey) {
      throw new Error('[apiKey] required');
    }

    this.prefix = apiPrefix;
    this.key = apiKey;
  }

  get(url) {
    return this.request({ url, method: 'get' });
  }

  async request({ url, method }) {
    const res = await axios({
      method,
      url: `${this.prefix}${url}`,
      params: { 'api-key': this.key },
    });

    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    return res.data.response;
  }
}
