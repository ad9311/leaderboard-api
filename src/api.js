/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

class API {
  constructor() {
    this.gameID = '';
    this.userData = {};
    this.scores = [];
    this.message = '';
    this.request = new XMLHttpRequest();
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.scoreURL = '';
  }

  retrieveGameID(string) {
    const result = string.split(' ')[3];
    this.gameID = result;
  }

  setScoreURL() {
    this.scoreURL = `${this.baseURL}${this.gameID}/scores/`;
  }

  getUserData(userData) {
    this.userData = { user: userData.user, score: userData.score };
  }

  objectPresent = (object) => {
    if (!_.isEmpty(object)) {
      return object;
    }
    return undefined;
  }

  async connectToAPI(requestMethod, url, object = {}) {
    const request = await fetch(url, {
      method: requestMethod,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.objectPresent(object)),
    });
    const response = await request.json();
    let finalResponse;
    if (request.status === 200 || request.status === 201 || request.ok) {
      finalResponse = response.result;
    } else {
      finalResponse = response;
    }
    return finalResponse;
  }

  getNewGameID = async (gameName) => {
    const response = await this.connectToAPI('POST', this.baseURL, gameName);
    this.retrieveGameID(response);
  };

  sendNewScore = async () => {
    const response = await this.connectToAPI('POST', this.scoreURL, this.userData);
    this.message = response;
  }

  getScores = async () => {
    const response = await this.connectToAPI('GET', this.scoreURL);
    this.scores = response;
  }
}

const api = new API();
export default api;
