let circle = document.getElementById("circle");
let speed = 40;
circle.style.left = "500px";
circle.style.top = "300px";
var circleLeft = circle.style.left;
var circleTop = circle.style.top;
console.log(circleLeft);
console.log(circleTop);

window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "a":
        circle.style.left = parseInt(circle.style.left ) - speed + "px";
        break;
      case "d":
        circle.style.left = parseInt(circle.style.left ) + speed + "px";
        break;
      case "w":
        circle.style.top = parseInt(circle.style.top) - speed + "px";
        break;
      case "s":
        circle.style.top = parseInt(circle.style.top) + speed + "px";
        break;
    }
  });
