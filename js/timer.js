import { setLimitTime } from "../js/store.js"

export const startCountdown = (seconds) => {
  let counter = seconds;
  const interval = setInterval(() => {
    counter--;
    if (counter < 0) {
      clearInterval(interval);
    } else {
      setLimitTime(counter)
      document.getElementById("timer").textContent = counter;
    }
  }, 1000);
}