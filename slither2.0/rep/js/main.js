let cursor = document.getElementById("cursor");
let food = document.getElementById("food");
let score = document.getElementById("score");
let music = document.getElementById("music");
let danger = document.getElementById("danger");
let lose = document.getElementById("lose");

let myTimer = setInterval(randomize, 4000);
let dangerPositionTimer = setInterval(dangerPosition, 4000);
let controlTimer = setInterval(control, 1500);

cursor.style.left = "500px";
cursor.style.top = "300px";
cursor.style.height = "200px";
cursor.style.width = "200px";

danger.style.left = "900px";
danger.style.top = "400px";
danger.style.height = "50px";
danger.style.width = "50px";

let foodx = 200;
let foody = 200;
let dangerx = parseInt(danger.style.left, 10);
let dangery = parseInt(danger.style.top, 10);
let danger_width = parseInt(danger.style.width, 10);
let danger_height = parseInt(danger.style.height, 10);
let food_width = 100;
let food_height = 100;
let cursor_width = parseInt(cursor.style.width, 10);
let cursor_height = parseInt(cursor.style.height, 10);
let score1 = 0;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let speedx = windowWidth / 12;
let speedy = windowHeight / 8;

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      cursor.style.left = parseInt(cursor.style.left) - speedx + "px";
      break;
    case "d":
      cursor.style.left = parseInt(cursor.style.left) + speedx + "px";
      break;
    case "a" + "w":
      cursor.style.left = parseInt(cursor.style.left) - speedx + "px";
      cursor.style.top = parseInt(cursor.style.top) - speedy + "px";
      break;
    case "a" + "s":
      cursor.style.left = parseInt(cursor.style.left) - speedx + "px";
      cursor.style.top = parseInt(cursor.style.top) + speedy + "px";
      break;
    case "d" + "w":
      cursor.style.left = parseInt(cursor.style.left) + speedx + "px";
      cursor.style.top = parseInt(cursor.style.top) - speedy + "px";
      break;
    case "d" + "s":
      cursor.style.left = parseInt(cursor.style.left) + speedx + "px";
      cursor.style.top = parseInt(cursor.style.top) + speedy + "px";
      break;
    case "w":
      cursor.style.top = parseInt(cursor.style.top) - speedy + "px";
      break;
    case "s":
      cursor.style.top = parseInt(cursor.style.top) + speedy + "px";
      break;
  }
});

document.addEventListener("keyup", function (event) {
  var x1 = parseInt(cursor.style.left, 10);
  var x2 = parseInt(cursor.style.top, 10);
  cursor_width = parseInt(cursor.style.width, 10);
  cursor_height = parseInt(cursor.style.height, 10);
  if (
    x1 < foodx + food_width &&
    x1 + cursor_width > foodx &&
    x2 < foody + food_height &&
    cursor_height + x2 > foody &&
    event.key == " "
  ) {
    score1++;
    score.innerHTML = score1;
    foodx = randomNumber(0, 1800);
    foody = randomNumber(200, 800);
    food.style.left = foodx + "px";
    food.style.top = foody + "px";
    clearInterval(myTimer);
    myTimer = setInterval(randomize, 4000);
    music.play();
  }
});

function control() {
  var x1 = parseInt(cursor.style.left, 10);
  var x2 = parseInt(cursor.style.top, 10);
  cursor_width = parseInt(cursor.style.width, 10);
  cursor_height = parseInt(cursor.style.height, 10);

  if (
    x1 <= 0 ||
    x1 + cursor_width >= windowWidth ||
    x2 <= 0 ||
    cursor_height + x2 >= windowHeight
  ) {
    lose.style.display = "block";
    cursor.style.display = "none";
    food.style.display = "none";
    danger.style.display = "none";
    setTimeout(refresh, 2000);
  } else if (
    x1 < dangerx + danger_width &&
    x1 + cursor_width > dangerx &&
    x2 < dangery + danger_height &&
    cursor_height + x2 > dangery
  ) {
    lose.style.display = "block";
    cursor.style.display = "none";
    food.style.display = "none";
    danger.style.display = "none";
    setTimeout(refresh, 2000);
  } else {
  }
}
function refresh() {
  location.reload();
}

function randomize() {
  clearInterval(myTimer);
  foodx = randomNumber(0, 1800);
  foody = randomNumber(200, 800);
  food.style.left = foodx + "px";
  food.style.top = foody + "px";
  myTimer = setInterval(randomize, 4000);
}

function dangerPosition() {
  danger_height = 100;
  danger_width = 100;
  danger.style.height = danger_height + "px";
  danger.style.width = danger_width + "px";
  dangerx = randomNumber(0, 900);
  dangery = randomNumber(200, 600);
  danger.style.left = dangerx + "px";
  danger.style.top = dangery + "px";
  clearInterval(dangerPositionTimer);
  growTimer = setInterval(grow, 1);
  growStop = setInterval(stop, 1000);
}
function grow() {
  danger_height++;
  danger_width++;
  danger.style.height = danger_height + "px";
  danger.style.width = danger_width + "px";
}
function stop() {
  clearInterval(growTimer);
  clearInterval(growStop);
  dangerPositionTimer = setInterval(dangerPosition, 3000);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
