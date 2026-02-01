let messageCount = 0;
const task1Output = document.getElementById('task1-output');

const intervalId = setInterval(() => {
  messageCount++;
  task1Output.textContent = `Повідомлення №${messageCount}`;

  if (messageCount === 5) {
    clearInterval(intervalId);
  }
}, 1000);


/* ================= Завдання 2 ================= */
const box = document.getElementById('box');
let size = 20;
let position = 0;

setInterval(() => {
  size += 1;
  position += 10;

  box.style.width = size + 'px';
  box.style.height = size + 'px';
  box.style.left = position + 'px';

  if (size > 50) {
    size = 20;
    position = 0;
  }
}, 500);


/* ================= Завдання 3 ================= */
const startGameBtn = document.getElementById('startGame');
const target = document.getElementById('target');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');

let score = 0;
let time = 10;
let gameTimer = null;
let gameActive = false;

function moveTarget() {
  const x = Math.random() * 260;
  const y = Math.random() * 260;
  target.style.left = x + 'px';
  target.style.top = y + 'px';
}

target.addEventListener('click', () => {
  if (!gameActive) return;

  score++;
  scoreEl.textContent = score;
  moveTarget();
});

startGameBtn.addEventListener('click', () => {
  if (gameActive) return;

  // reset
  score = 0;
  time = 10;
  gameActive = true;

  scoreEl.textContent = score;
  timeEl.textContent = time;

  target.style.display = 'block';
  moveTarget();

  gameTimer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time === 0) {
      clearInterval(gameTimer);
      gameActive = false;
      target.style.display = 'none';
      alert(`Гру завершено! Очки: ${score}`);
    }
  }, 1000);
});

/* ================= Завдання 4 ================= */
const startBtn = document.getElementById('startTimer');
const secondsInput = document.getElementById('seconds');

startBtn.addEventListener('click', () => {
  const seconds = Number(secondsInput.value);

  if (seconds <= 0) {
    alert('Введіть коректний час');
    return;
  }

  setTimeout(() => {
    alert(`Минуло ${seconds} секунд!`);
  }, seconds * 1000);
});