

let intervalId = null;
document.getElementById("startBtn").addEventListener("click", () => {
  const hoursInput = document.getElementById("hour").value;
  const minuteInput = document.getElementById("minute").value;
  const secondsInput = document.getElementById("seconds").value;
  const newDateObj = new Date();
  newDateObj.setHours(newDateObj.getHours() + parseInt(hoursInput));
  newDateObj.setMinutes(newDateObj.getMinutes() + parseInt(minuteInput));
  newDateObj.setSeconds(newDateObj.getSeconds() + parseInt(secondsInput));
  updateTimer(newDateObj.getTime());
});

const updateTimer = (targetTime) => {
  intervalId = setInterval(() => {
    const currentTime = new Date();
    let hour = 0,
      minute = 0,
      second = 0;
    let difference = targetTime - currentTime.getTime();
    if (difference > 0) {
      hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      second = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
    document.getElementById("hour").value = hour;
    document.getElementById("minute").value = minute;
    document.getElementById("seconds").value = second;
  }, 1000);
};
