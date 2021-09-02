/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

class API {
  constructor() {
    this.gameID = {};
    this.userData = {};
    this.scores = [];
    this.message = '';
    this.request = new XMLHttpRequest();
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.scoreURL = '';
  }

  retrieveGameID(string) {
    const result = string.split(' ');
    this.gameID = { id: result[3] };
  }

  setScoreURL() {
    this.scoreURL = `${this.baseURL}${this.gameID.id}/scores/`;
  }

  getUserData(userData) {
    this.userData = { user: userData.user, score: userData.score };
  }

  createRequest(method, url, object = {}) {
    this.request.open(method, url, true);
    this.request.setRequestHeader('Content-type', 'application/json');
    if (!_.isEmpty(object)) {
      this.request.send(JSON.stringify(object));
    } else {
      this.request.send();
    }
  }

  validateResponse() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!_.isEmpty(this.request.response)) {
          resolve(this.request.response);
        } else {
          reject(Error('Server took too much to respond. Please try again.'));
        }
      }, 1000);
    });
  }

  async getNewGameID(gameName) {
    this.createRequest('POST', this.baseURL, gameName);
    const response = await this.validateResponse();
    this.retrieveGameID(response);
  }

  async sendNewScore() {
    this.createRequest('POST', this.scoreURL, this.userData);
    const response = await this.validateResponse();
    this.message = JSON.parse(response).result;
  }

  async getScores() {
    this.createRequest('GET', this.scoreURL);
    const response = await this.validateResponse();
    this.scores = JSON.parse(response).result;
    this.message = JSON.parse(response).result;
  }
}

const api = new API();
export default api;
