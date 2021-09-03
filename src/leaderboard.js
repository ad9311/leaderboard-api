class Leaderboard {
  constructor() {
    this.list = [];
  }

  addNewScore(nameScore) {
    this.list.push(nameScore);
  }
}

const lb = new Leaderboard();
export default lb;
