const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

// Добавляет ноль, если число меньше 10 (для форматирования времени)
const formatTime = (num) => {
  return num.toString().padStart(2, "0");
};

const createTimerAnimator = () => {
  let intervalId;
  return (seconds) => {
    let remainingSeconds = seconds;
    clearInterval(intervalId);

    const updateTimerDisplay = () => {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;
      timerEl.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;
    };

    updateTimerDisplay();

    intervalId = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds >= 0) {
        updateTimerDisplay();
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
