export const startCountdown = (seconds) => {
  let counter = seconds;
  const interval = setInterval(() => {
    counter--;
    if (counter < 0) {
      clearInterval(interval);
    } else {
      // setLimitTime(counter)
    }
  }, 1000);
}