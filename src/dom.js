/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

class DOM {
  constructor() {
    this.board = document.getElementById('board');
    this.userData = {};
  }

  setLocalStorage = (api) => {
    localStorage.setItem('ad931lb-game-api', JSON.stringify({ id: api.gameID }));
    return JSON.stringify({ id: api.gameID });
  };

  getLocalStorage = (api) => {
    api.gameID = JSON.parse(localStorage.getItem('ad931lb-game-api')).id;
    return api.gameID;
  }

  getUserData = () => {
    const user = document.getElementById('user').value;
    const score = document.getElementById('score').value;
    this.userData = { user, score };
  }

  cleanFields = () => {
    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
  }

  addUserDataToList = (userData) => {
    const li = document.createElement('li');
    const spanUser = document.createElement('span');
    const spanScore = document.createElement('span');
    spanUser.classList = 'user-span text-overflow';
    spanScore.classList = 'text-overflow';
    li.classList = 'mtb-1';
    spanUser.innerHTML = userData.user;
    li.appendChild(spanUser);
    spanScore.innerHTML = userData.score;
    li.appendChild(spanScore);
    return li;
  }

  sortScores = (scores) => {
    scores.sort((a, b) => parseInt(b.score, 10) - parseInt(a.score, 10));
  }

  renderScores(scores) {
    this.sortScores(scores);
    this.board.innerHTML = '';
    scores.forEach((score) => {
      const row = this.addUserDataToList(score);
      this.board.appendChild(row);
    });
  }

  renderAPIMessage = (param) => {
    if (_.isError(param) || param.message) {
      document.getElementById('message-container').classList = 'message-in error';
      document.getElementById('message').innerHTML = `${param.message} Please try again.`;
    } else {
      document.getElementById('message-container').classList = 'message-in info';
      document.getElementById('message').innerHTML = param;
    }
  }

  clearMessage = () => {
    setTimeout(() => {
      document.getElementById('message-container').className += ' message-off';
    }, 3000);
  }

  validateInput = async () => {
    const regexUser = new RegExp(/^[^\s].+$/, 'g');
    const regexScore = new RegExp(/^([0-9]|[1-9][0-9]+)$/, 'g');
    let validation = false;
    if (regexUser.test(this.userData.user) && regexScore.test(this.userData.score)) {
      validation = true;
    } else {
      throw Error('Incorrect input format.');
    }
    return validation;
  }
}

const dom = new DOM();
export default dom;
