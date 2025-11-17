// Author: Masato Kuster
// Date: 17.11.2025

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

function updateClock() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDeg = (sec / 60) * 360;

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + (sec / 60) * 6;

  const hour = now.getHours();
  const hourDeg = (hour % 12) * 30 + (min / 60) * 30;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
