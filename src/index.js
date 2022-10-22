import generateJoke from './generateJoke.js';
import './styles/main.scss';
import pikachu from './assets/pikachu.gif';

const pikachuImg = document.getElementById('pikachuImg');
pikachuImg.src = pikachu;

document.getElementById('jokeBtn').addEventListener('click', () => {
  generateJoke();
});

generateJoke();
