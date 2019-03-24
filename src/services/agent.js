import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { API_ROOT_FOREX } from '../constants/common'

const superagent = superagentPromise(_superagent, global.Promise);

const errorHandle = err => Promise.reject(err);
const responseBody = res => res.body;

export const agent = {
  del: url =>
    superagent.del(`${API_ROOT_FOREX}${url}`)
      .then(responseBody, errorHandle),
  get: url =>
    superagent.get(`${API_ROOT_FOREX}${url}`)
      .then(responseBody, errorHandle),
  put: (url, body) =>
    superagent.put(`${API_ROOT_FOREX}${url}`, body)
      .then(responseBody, errorHandle),
  post: (url, body) =>
    superagent.post(`${API_ROOT_FOREX}${url}`, body)
      .then(responseBody, errorHandle),
};
