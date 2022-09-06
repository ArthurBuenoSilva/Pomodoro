let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let lastId = 0;
let canClick = true

let hour = 0;
let minute = 0;
let second = 0;

progressBar.style.background = `conic-gradient(
      #dc3545 ${progressValue}deg,
      #dedede ${progressValue}deg
  )`;

let progress = null;

// Get lastID
lastId = localStorage.getItem('ID')
if (!lastId){
    lastId = -1
}

function start(){
    if (canClick){
        canClick = false
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
                #dc3545 ${progressValue / 1.66666667}deg,
                #dedede ${progressValue / 1.66666667}deg
            )`;

            if ((progressValue / 6) === progressEndValue) {
              save()
            }
        }, 1000);
    }
}

function pause(){
    clearInterval(progress);
    canClick = true
}

function save(){
    if (!canClick) {
        clearInterval(progress);
        let auxTime = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0');
        if (localStorage.getItem(lastId) !== auxTime){
            lastId++
            localStorage.setItem('ID', lastId)
            localStorage.setItem(lastId.toString(), hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0'))
        }
        progressValue = 0;
        second = 0;

        canClick = true;
        notify().then(r => {
            document.getElementById('notification').textContent = '';
        })
    }
}

async function notify(){
    document.getElementById('notification').textContent = 'Saved successfully';
    await delay(2000)
}

function delay(ms) {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
}