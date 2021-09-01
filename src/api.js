class API {
  constructor() {
    this.gameID = {};
    this.userData = {};
    this.request = new XMLHttpRequest();
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.scoreURL = '';
  }

  retrieveGameID(string) {
    const result = string.split(' ');
    this.gameID = { id: result[3] };
  }

  setScoreURL() {
    this.scoreURL = `${this.baseURL}${this.gameID.id}/scores/`
  }

  getUserData(userData) {
    this.userData = { user: userData.name, score: userData.score }
  }

  createRequest(method, url, object) {
    this.request.open(method, url, true);
    this.request.setRequestHeader('Content-type', 'application/json');
    this.request.send(JSON.stringify(object));
  }

  validateResponse() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.request.response !== '') {
          resolve(this.request.response);
        } else {
          reject('There was an error getting the data from the server. Please try again');
        }
      }, 1000);
    });
  }

  async getNewGameID() {
    const response = await this.validateResponse();
    this.retrieveGameID(response);
  }

  async sendNewScore() {
    this.createRequest('POST', this.scoreURL, this.userData);
    const response = await this.validateResponse();
    console.log(response);
  }
}

const api = new API();
export default api;
// {"id":"XTlqz6zCVJWA77VUli27"}