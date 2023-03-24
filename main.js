console.log('Jeu démarré');

let plateau_jeu = document.querySelector('#plateau_jeu');
const carre = document.querySelector('#carre');
let click = 0;
let scoreElement = document.querySelector('#score');
let highScore = 0;
let bestScoreElement = document.querySelector('#bestScore');
// On définit les dimensions du plateau de jeu
const PlateaujeuLargeur = 500;
const PlateaujeuHauteur = 300;

let chrono = 10;
let chronoElement = document.querySelector('#chrono');
chronoElement.innerHTML = chrono;

function handleClick() {
  console.log('click sur la plateau_jeu !');
  click += 1;
  scoreElement.innerHTML = click;

  const top = Math.floor(Math.random() * (PlateaujeuHauteur -50));
  const left = Math.floor(Math.random() * (PlateaujeuLargeur -50));

  // Limit carre movement so that the carre will always apeare
  if (top + carre.offsetHeight > (PlateaujeuHauteur -50)) {
    top = (PlateaujeuHauteur -50) - carre.offsetHeight;
  }
  if (left + carre.offsetWidth > (PlateaujeuLargeur -50)) {
    left = (PlateaujeuLargeur -50) - carre.offsetWidth;
  }


  carre.style.top = top +'px';
  carre.style.left = left+'px';
}

carre.addEventListener("click", handleClick);

// Check for high score in localStorage and update the best score
if (localStorage.getItem("highScore")) {
  highScore = localStorage.getItem("highScore");
  bestScoreElement.innerHTML = highScore;
}

let timerInterval = setInterval(() => {
  console.log("timer");
  if (chrono != 0) {
    chrono--;
    chronoElement.innerHTML = chrono;
  }

  if (chrono == 0) {
    clearInterval(timerInterval);
    carre.removeEventListener("click", handleClick);

    // Check for new high score and update the localStorage and best score 
    if (click > highScore) {
      localStorage.setItem("highScore", click);
      highScore = click;
      bestScoreElement.innerHTML = highScore;
      //MESSAGE DE FELICITATION
      alert("Félicitations, vous avez battu le record !");
    }
  }
  // Show replay button
  let replayBtn = document.querySelector('#replayBtn');
  replayBtn.style.display = "block";

}, 1000);

//replay the game 


let replayBtn = document.querySelector('#replayBtn');
replayBtn.addEventListener('click', () => {
const carre = document.querySelector('#carre');
let click = 0;
let scoreElement = document.querySelector('#score');
let highScore = 0;
let bestScoreElement = document.querySelector('#bestScore');

let chrono = 10;
let chronoElement = document.querySelector('#chrono');
chronoElement.innerHTML = chrono;

function handleClick() {
  console.log('click sur la carre !');
  click += 1;
  scoreElement.innerHTML = click;

  const top = Math.floor(Math.random() * (PlateaujeuHauteur -50));
  const left = Math.floor(Math.random() * (PlateaujeuLargeur -50));

  // Limit carre movement so that the carre will always apeare
  if (top + carre.offsetHeight > (PlateaujeuHauteur -50)) {
    top = (PlateaujeuHauteur -50) - carre.offsetHeight;
  }
  if (left + carre.offsetWidth > (PlateaujeuLargeur -50)) {
    left = (PlateaujeuLargeur -50) - carre.offsetWidth;
  }

  carre.style.top =  top +'px';
  carre.style.left = left+'px';
}

carre.addEventListener("click", handleClick);

// Check for high score in localStorage and update the best score 
if (localStorage.getItem("highScore")) {
  highScore = localStorage.getItem("highScore");
  bestScoreElement.innerHTML = highScore;
}

let timerInterval = setInterval(() => {
  console.log("timer");
  if (chrono != 0) {
    chrono--;
    chronoElement.innerHTML = chrono;
  }

  if (chrono == 0) {
    clearInterval(timerInterval);
    carre.removeEventListener("click", handleClick);

    // Check for new high score and update the localStorage and best score 
    if (click > highScore) {
      localStorage.setItem("highScore", click);
      highScore = click;
      bestScoreElement.innerHTML = highScore;
      alert("Félicitations, vous avez battu le record !");
    }
  }
  // Show replay button
  let replayBtn = document.querySelector('#replayBtn');
  replayBtn.style.display = "block";

}, 1000);
  return replayBtn;
});

