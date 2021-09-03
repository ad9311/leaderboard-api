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
    const tr = document.createElement('tr');
    const tdUser = document.createElement('td');
    const tdScore = document.createElement('td');
    tdUser.innerHTML = `${userData.user}`;
    tr.appendChild(tdUser);
    tdScore.innerHTML = `${userData.score}`;
    tr.appendChild(tdScore);
    return tr;
  }

  renderScores(scores) {
    this.board.innerHTML = '<tr><th>User</th><th>Score</th></tr>';
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
