let timer;
let totalSeconds = 0;

function updateDisplay() {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!timer) {
    const input = document.getElementById('inputMinutes').value;
    if (totalSeconds === 0 && input) {
      totalSeconds = parseInt(input) * 60;
    }
    timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(timer);
        timer = null;
        alert("時間になりました！");
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  totalSeconds = 0;
  updateDisplay();
}
