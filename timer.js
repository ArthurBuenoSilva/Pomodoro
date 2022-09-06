let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let lastId = 0;

let hour = 0;
let minute = 0;
let second = 0;

progressBar.style.background = `conic-gradient(
      #dc3545 ${progressValue}deg,
      #eeeeee ${progressValue}deg
  )`;

let progress = null;

// Get lastID
lastId = localStorage.getItem('ID')
if (!lastId){
    lastId = -1
}

function start(){
    progress = setInterval(() => {
      progressValue++;
      second++;

      if (second === 60){
          second = 0;
          minute++;
      }

      if (minute === 60){
          minute = 0;
          hour++;
      }

      valueContainer.textContent = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0');
      progressBar.style.background = `conic-gradient(
          #dc3545 ${progressValue * 3.6}deg,
          #eeeeee ${progressValue * 3.6}deg
      )`;

      if ((progressValue * 3.6) === progressEndValue) {
        clearInterval(progress);
      }
    }, 1000);
}

function pause(){
    clearInterval(progress);
}

function save(){
    clearInterval(progress);
    let auxTime = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0');
    if (localStorage.getItem(lastId) !== auxTime){
        lastId++
        localStorage.setItem('ID', lastId)
        localStorage.setItem(lastId.toString(), hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0'))
    }
    progressValue = 0;
    second = 0;
}