class API {
  constructor() {
    this.gameID = {};
    this.error = '';
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  retrieveGameID(response) {
    const result = response.split(' ');
    this.gameID = { id: result[3] };
  }

  sendRequest(request) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (request.response.includes('added')) {
          resolve(request.response);
        } else {
          reject('There was an error getting the data from the server. Please try again');
        }
      }, 1000);
    });
  }

  async validateResponse() {
    const request = new XMLHttpRequest();
    request.open('POST', this.baseURL, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({ "name": "MyGame" }));
    const response = await this.sendRequest(request);
    this.retrieveGameID(response);
  }
}

const api = new API();
export default api;
