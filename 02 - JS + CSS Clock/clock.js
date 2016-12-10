const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate () {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (((seconds / 60) * 360) + 90);

  const minutes = now.getMinutes() + seconds / 60;
  const minutesDegrees = (((minutes / 60) * 360) + 90);

  const hours = now.getHours() + minutes / 60;
  const hoursDegrees = ((hours / 12) * 360 + 90);

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);