class DOM {
  constructor() {
    this.board = document.getElementById('board');
  }

  userData = () => {
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    return { name, score };
  }

  cleanFields = () => {
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  }

  addUserDataToList = (userData) => {
    const li = document.createElement('li');
    li.classList = 'p-2';
    li.innerHTML = `${userData.name}: ${userData.score}`;
    return li;
  }

  renderScore() {
    const userData = this.userData();
    const li = this.addUserDataToList(userData);
    this.board.appendChild(li);
  }

  setLocalStorage = (api) => {
    localStorage.setItem('game', JSON.stringify(api.gameID));
    return JSON.stringify(api.gameID);
  };

  getLocalStorage = (api) => {
    api.gameID = JSON.parse(localStorage.getItem('game'));
    return api.gameID;
  }
}

const dom = new DOM();
export default dom;
