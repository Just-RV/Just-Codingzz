const time = document.querySelector('#Timing')

setInterval(function () {
  const realTime = new Date();
  time.innerHTML = realTime.toLocaleTimeString();
}, 1000)