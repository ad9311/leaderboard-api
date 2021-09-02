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
    li.classList = 'p-2';
    li.innerHTML = `${userData.user}: ${userData.score}`;
    return li;
  }

  renderScores(scores) {
    this.board.innerHTML = '';
    scores.forEach((score) => {
      const li = this.addUserDataToList(score);
      this.board.appendChild(li);
    });
  }

  renderAPIMessage(message) {
    document.getElementById('message').innerHTML = message;
  }
}

const dom = new DOM();
export default dom;
