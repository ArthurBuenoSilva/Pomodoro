import { Timer } from 'easytimer.js'

const timer = new Timer()

$('.startButton').click(function () {
    timer.start({precision: "seconds"});
});

$('.pauseButton').click(function () {
    timer.pause();
});

$('.resetButton').click(function () {
    timer.reset();
});

timer.addEventListener('secondsUpdated', function (e) {
    $('.value-container').html(timer.getTimeValues().toString());
});

timer.addEventListener('started', function (e) {
    $('.value-container').html(timer.getTimeValues().toString());
});

timer.addEventListener('reset', function (e) {
    $('.value-container').html(timer.getTimeValues().toString());
});


let progressBar = document.querySelector(".circular-progress");

let progressValue = 0;
let progressEndValue = 100;

progressBar.style.background = `conic-gradient(
      #dc3545 ${progressValue * 3.6}deg,
      #eeeeee ${progressValue * 3.6}deg
  )`;

// let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient(
//       #dc3545 ${progressValue * 3.6}deg,
//       #eeeeee ${progressValue * 3.6}deg
//   )`;
//   if (progressValue === progressEndValue) {
//     clearInterval(progress);
//   }
// }, 1000);
