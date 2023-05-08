const p1Display = document.querySelector(".p1Score");
const p2Display = document.querySelector(".p2Score");
const p1Button = document.querySelector(".p1Button");
const p2Button = document.querySelector(".p2Button");
const reset = document.querySelector(".reset");
const winScore = document.querySelector("#winScore");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 5;

winScore.addEventListener("click", () => {
  winningScore = parseInt(winScore.value);
});

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("looser");
    }
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("looser");
    }
  }
});

reset.addEventListener("click", () => {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  p1Display.classList.remove("looser");
  p2Display.classList.remove("looser");
  isGameOver = false;
});
