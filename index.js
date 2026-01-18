// setTimeOut (callback, delay, ag1...)
//Інтервал
// console.log("An event BEFORE set timeout invoked");
// // setTimeout(() => {
// //      console.log("An event INSIDE set timeout invoked");
// // }, 5000);
// // setTimeout(x,y =>{
// //      console.log(x + y);
// // },2000, 6,7);


// // console.log("An event AFTER set timeout invoked");

// const message = (time) => {
//      console.log(`Message after $(time) ms invod`);
// }

// setTimeout(message, 3000, 500);

// const timeOutId = setTimeout(message, 500, 5000);

// const needClearTimer = Math.random() > 0.5;

// if(needClearTimer){
//      clearTimeout(timeOutId);
// // }

// // setInterval (callback, delay, ag1...)

// const logger = (time) => {
// console.log(`Logger after ${time} ms - ${Date.now()}`);
// }
// // console.log("log до виклику setInterval");
// // setInterval(logger, 2000, 500);
// // console.log("log після виклику setInterval");
// const intervalId = setInterval(logger, 2000, 500);
// console.log(intervalId);
// const needClearInterval = Math.random() > 0.5;
// console.log(needClearInterval);
//  if(needClearInterval){
//      clearInterval(intervalId);
// }

const timerRef = document.querySelector(".timer");

const btnRef = document.querySelector("[data-action='handle-timer']");

let count = 0;

let intervalId = null;

btnRef.addEventListener("click", (event) => {
event.target.textContent = intervalId ? "Start " : "Pause";

if (intervalId !== null) {
     clearInterval(intervalId);
     intervalId = null;
     return;
}

     intervalId = setInterval(() => {
          count += 1;
          timerRef.textContent = count;
     }, 1000); 
 
});
//  btnRef.onClick = event => {
//      event.target.textContent = Pause ? "Start" : "Pause";