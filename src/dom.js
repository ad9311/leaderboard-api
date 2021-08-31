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

  updateLocalStorage = (lb) => {
    localStorage.setItem('list', JSON.stringify(lb.list));
    return JSON.parse(localStorage.getItem('list'));
  };

  renderStorage = (lb) => {
    if (localStorage.getItem('list')) {
      lb.list = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < lb.list.length; i += 1) {
        const li = this.addUserDataToList({ name: lb.list[i].name, score: lb.list[i].score });
        this.board.appendChild(li);
      }
    }
  }
}

const dom = new DOM();
export default dom;
