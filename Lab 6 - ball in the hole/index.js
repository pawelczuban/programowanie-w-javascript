var board = document.getElementById("board");
var ball = document.getElementById("ball");
var hole = document.getElementById("hole");
const timer = document.getElementById("timer");
var scoreboard = document.getElementById("scoreboard");
var seconds = 0;
var holeX = 250;
var holeY = 250;
var ballX = 250;
var ballY = 250;
var speedX = 0;
var speedY = 0;
var score = -1;
var startTime;
var endTime;

ball.style.left = ballX + "px";
ball.style.top = ballY + "px";
hole.style.left = holeX + "px";
hole.style.top = holeY + "px";

window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {

  var x = event.beta;
  var y = event.gamma;

  speedX = -x * 0.1;
  speedY = y * 0.1;
}

function time() {
let interval = setInterval(() => {timer.innerHTML = `Czas: ${seconds++}`} ,1000);
}
time();

startTime = Date.now();
requestAnimationFrame(animate);

function animate() {

  ballX += speedX;
  ballY += speedY;

  if (ballX < 0) {
    ballX = 0;
    speedX = 0;
  }
  if (ballX > 470) {
    ballX = 470;
    speedX = 0;
  }
  if (ballY < 0) {
    ballY = 0;
    speedY = 0;
  }
  if (ballY > 470) {
    ballY = 470;
    speedY = 0;
  }
  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  if (Math.abs(ballX - holeX) < 20 && Math.abs(ballY - holeY) < 20) {

    score++;
    seconds = 0;

    if (score == 1) {
      endTime = Date.now();
      var totalTime = (endTime - startTime) / 1000;
      alert("Gratulacje! Ukończyłeś grę w czasie " + totalTime + " sekund.");
      var userName = prompt("Podaj swoją nazwę.");

      if (localStorage.getItem("results") == null) {
        localStorage.setItem("results", `${userName}: ${totalTime}s`);
      } else {
        var currentScores = localStorage.getItem("results");
        localStorage.setItem("results", currentScores + `, ${userName}: ${totalTime}s`);
      }

      var results = localStorage.getItem("results");
      scoreboard.innerHTML = `<h2>Najlepsze wyniki:</h2> <p> ${results} </p>`;
      return;
    }

    holeX = Math.random() * 450;
    holeY = Math.random() * 450;
    hole.style.left = holeX + "px";
    hole.style.top = holeY + "px";

    speedX = 0;
    speedY = 0;
  }

requestAnimationFrame(animate);
}