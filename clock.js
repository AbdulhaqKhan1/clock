const hourDisplay = document.getElementById("hour");
const minuteDisplay = document.getElementById("minute");
const secondDisplay = document.getElementById("second");
const pmDisplay = document.getElementById("pm");

const Display = () => {
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let letter;

  if (hour > 12) {
    letter = "pm";
  }

  if (hour < 12) {
    letter = "am";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  hourDisplay.innerHTML = hour;
  minuteDisplay.innerHTML = minute;
  secondDisplay.innerHTML = second;
  pmDisplay.innerHTML = letter;
};

Display();

setInterval(() => {
  Display();
}, 1000);
