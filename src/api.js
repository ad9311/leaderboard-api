class API {
  requestNewGame() {
    const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    const request = new XMLHttpRequest();
    request.open('POST', baseURL);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({ "name": "MyGame" }));
    console.log(request.response);
  }
}

const api = new API();
export default api;