/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

class DOM {
  constructor() {
    this.board = document.getElementById('board');
    this.userData = {};
    this.animationGen = this.generateAnimation();
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

  addUserDataToList = (userData, index) => {
    const li = document.createElement('li');
    const spanNumber = document.createElement('span');
    const spanUser = document.createElement('span');
    const spanScore = document.createElement('span');
    spanNumber.classList = 'number-span text-overflow';
    spanUser.classList = 'user-span text-overflow';
    spanScore.classList = 'text-overflow';
    spanNumber.innerHTML = index + 1;
    li.appendChild(spanNumber);
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
    scores.forEach((score, index) => {
      const row = this.addUserDataToList(score, index);
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
    setTimeout(() => {
      document.getElementById('message-container').className += ' message-off';
    }, 5000);
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

  * generateAnimation() {
    while (true) {
      document.getElementById('title').classList += ' title-animation-on';
      yield this.wating = true;
      document.getElementById('title').classList = 'title con-6 m-0';
      yield this.wating = false;
    }
  }
}

const dom = new DOM();
export default dom;
