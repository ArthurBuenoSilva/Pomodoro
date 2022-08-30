// import { Timer } from 'easytimer.js'
//
// const timer = new Timer()
//
// $('.startButton').click(function () {
//     timer.start({precision: "seconds"});
// });
//
// $('.pauseButton').click(function () {
//     timer.pause();
// });
//
// $('.resetButton').click(function () {
//     timer.reset();
// });
//
// timer.addEventListener('secondsUpdated', function (e) {
//     $('.value-container').html(timer.getTimeValues().toString());
// });
//
// timer.addEventListener('started', function (e) {
//     $('.value-container').html(timer.getTimeValues().toString());
// });
//
// timer.addEventListener('reset', function (e) {
//     $('.value-container').html(timer.getTimeValues().toString());
// });


let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container")

let progressValue = 0;
let progressEndValue = 100;

let hour = 0
let minute = 0
let second = 0

progressBar.style.background = `conic-gradient(
      #dc3545 ${progressValue}deg,
      #eeeeee ${progressValue}deg
  )`;

let progress = setInterval(() => {
    progressValue++
    second++
  if (second === 60){
      second = 0
      minute++
  }

  if (minute === 60){
      minute = 0
      hour++
  }

  valueContainer.textContent = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0')
  progressBar.style.background = `conic-gradient(
      #dc3545 ${progressValue / 18}deg,
      #eeeeee ${progressValue / 18}deg
  )`;

  if ((progressValue / 18) === progressEndValue) {
    clearInterval(progress);
  }
}, 1000);
