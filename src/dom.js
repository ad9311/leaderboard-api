class DOM {
  constructor() {
    this.board = document.getElementById('board');
  }

  setLocalStorage = (api) => {
    localStorage.setItem('game', JSON.stringify(api.gameID));
    return JSON.stringify(api.gameID);
  };

  getLocalStorage = (api) => {
    api.gameID = JSON.parse(localStorage.getItem('game'));
    return api.gameID;
  }

  getUserData = () => {
    const user = document.getElementById('user').value;
    const score = document.getElementById('score').value;
    return { user, score };
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

  renderScores(scores) {
    this.board.innerHTML = '';
    scores.forEach((score) => {
      const row = this.addUserDataToList(score);
      this.board.appendChild(row);
    });
  }

  renderAPIMessage = (message) => {
    if (message.message) {
      document.getElementById('message').innerHTML = message.message;
    } else {
      document.getElementById('message').innerHTML = message;
    }
  }
}

const dom = new DOM();
export default dom;
