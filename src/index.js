import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';

const renderOnLoad = () => {
  dom.renderStorage(lb);
}

const addNewScore = () => {
  lb.addNewScore(dom.userData());
  dom.updateLocalStorage(lb);
  dom.renderScore();
  dom.cleanFields();
}

window.addEventListener('load', renderOnLoad());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
