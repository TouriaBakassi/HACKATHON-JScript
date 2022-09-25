let spans = document.querySelectorAll("span");
let Startbtn = document.querySelector("#start");
let Stopbtn = document.querySelector("#stop");
let Resetbtn = document.querySelector("#reset");
let heur = 0;
let minute = 0;
let second = 0;
let Msecond = 0;

// 1s= 1000ms ;  1min= 60s  ;  1h= 60s
function chronometre() {
  Msecond += 1;
  if (Msecond == 1000) {
    Msecond = 0;
    second += 1;
  }
  if (second == 60) {
    second = 0;
    minute += 1;
  }
  if (minute == 60) {
    minute = 0;
    heur += 1;
  }
  spans[0].textContent = heur;
  spans[1].textContent = minute;
  spans[2].textContent = second;
  spans[3].textContent = Msecond;
}
let CHRONO;
Startbtn.addEventListener("click", () => {
  CHRONO = setInterval(chronometre, 100);
});
Stopbtn.addEventListener("click", () => {
  clearInterval(CHRONO);
});
Resetbtn.addEventListener("click", () => {
  clearInterval(CHRONO);
  spans[0].textContent = 0;
  spans[1].textContent = 0;
  spans[2].textContent = 0;
  spans[3].textContent = 0;
});
