import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';
import api from './api.js';

async function checkExistingGame() {
  if(localStorage.getItem('game')) {
    console.log('There is a local storage already!');
  } else {
    await api.validateResponse().catch();
    dom.setLocalStorage(api);
  }
}

const addNewScore = () => {
  lb.addNewScore(dom.userData());
  dom.cleanFields();
};

window.addEventListener('load', () => checkExistingGame());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
