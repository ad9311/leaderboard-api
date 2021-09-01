import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';
import api from './api.js';

async function checkExistingGame() {
  if(localStorage.getItem('game')) {
    dom.getLocalStorage(api);
    api.setScoreURL();
  } else {
    api.createRequest('POST', api.baseURL, { name: 'MyGame' });
    await api.getNewGameID().catch();
    dom.setLocalStorage(api);
  }
}

const addNewScore = () => {
  const userData = dom.getUserData();
  lb.addNewScore(userData);
  api.getUserData(userData);
  api.sendNewScore();
  dom.cleanFields();
};

window.addEventListener('load', () => checkExistingGame());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
