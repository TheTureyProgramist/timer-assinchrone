let pount = 0;
const text = document.querySelector(".interval-post")
const interval = setInterval(() => {
    pount += 1
    text.innerHTML = `<p>Cила струму ${pount}A<p>`
    if (pount === 5) {
        clearInterval(interval);
    }
}, 1000);
// const cycle = `
// <p>Cила струму ${interval}А</p> `
// text.innerHTML = cycle;
//---------------------------------------------------
let count = 0;
const clickArea = document.getElementById("click-area");
const clickCount = document.getElementById("click-count");
function handleClick() {
  count += 1;
  clickCount.textContent = `${count}`;
}
clickArea.addEventListener("click", handleClick);
//------------------------------------------------------
let timeLeft = 30000; 
let timerInterval;
let timerStarted = false;
const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer-clicker");
function startTimer() {
  if (timerStarted) return;
  timerStarted = true;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft -= 1; 
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timeLeft = 0;
      updateTimerDisplay();
    }
  }, 1);
}
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const milliseconds = timeLeft % 1000;
  const formatted = 
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}.` +
    `${milliseconds.toString().padStart(3, '0')}`;
  timerDisplay.textContent = formatted;
  if (timeLeft > 10000) {
    timerDisplay.style.color = "green";
  } else if (timeLeft > 0) {
    timerDisplay.style.color = "orange";
  } else {
    timerDisplay.style.color = "red";
  }
}
function handleClick() {
  if (!timerStarted || timeLeft <= 0) return;
  count += 1;
  clickCount.textContent = `${count}`;
}
clickArea.addEventListener("click", handleClick);
startButton.addEventListener("click", startTimer);
//------------------------------------------------------------------
let timerTime = 60;
let timerStart = false;
let timerPeriod;
const timerPlay = document.getElementById("timer");
const message = document.querySelector(".message");
function startTimer() {
    if (timerStart) return;
    timerStart = true;
    updateTimerDisplay();
    timerPeriod = setInterval(() => {
        if (timerTime > 0) {
            timerTime--;
            updateTimerDisplay();
            if (timerTime === 29) {
                message.textContent = "Залишилось менше половини часу";
            }
        } else {
            clearInterval(timerPeriod);
        }
    }, 1000);
}
function updateTimerDisplay() {
    timerPlay.textContent = `00:${timerTime < 10 ? '0' + timerTime : timerTime}`;
}
startTimer();
//-----------------------------------------------------------х
const time = document.querySelector(".time")
const stopTime = document.querySelector(".stop-time")
const messageTimers = document.querySelector("message-time")
// let a = Number(prompt("Type time"))
// const timer = document.querySelector(".num")
// const stop = document.querySelector(".stop")
// console.log(a)
// const intervals = setInterval(() => {
//     a -= 1
//     timer.innerHTML = a
//     if (a >= 0) { 45
//         timer.innerHTML = a
//     }
//     else {
//         clearInterval(interval)
//     }
// }, 1000)
// stop.addEventListener("click", () => {
//     clearInterval(interval)
// })
// //------------------------------------------------------------
 const animate = document.querySelector(".animate")
 const animationId = setInterval(() => {
   animate.style.borderRadius = `${Math.random() * 250}px`
   const red = Math.round(Math.random() * (255 - 0) + 0)
   const green = Math.round(Math.random() * (255 - 0) + 0)
   const blue = Math.round(Math.random() * (255 - 0) + 0)
   animate.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
   console.log(`rgb(${red, green, blue})`)
 }, 1000)
 //4task--------------------------------------------
const type = prompt("Type time")
const messageTimer = document.querySelector(".message-time")
const timerTest = setInterval(() => {
messageTimer.innerHTML = `<p>Text${type}</p>`
}, Number(`${type}000`))