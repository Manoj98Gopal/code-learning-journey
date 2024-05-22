const tortaise = document.querySelector(".tort");

let x = 0;
let y = 0;
let flip = false;
let rotate = 0;
const speed = 15;

const handlingKey = (e) => {
  if (!e.key.includes("Arrow")) {
    return null;
  }

  switch (e.key) {
    case "ArrowRight":
      x = x + 1 * speed;
      flip = false;
      rotate = 0;
      break;
    case "ArrowLeft":
      x = x - 1 * speed;
      flip = true;
      rotate = 0;
      break;
    case "ArrowUp":
      y = y - 1 * speed;
      rotate = -90;
      break;
    case "ArrowDown":
      y = y + 1 * speed;
      rotate = 90;
      break;
    default:
      console.log("no matching");
  }

  tortaise.style.setProperty("--x", `${x}px`);
  tortaise.style.setProperty("--y", `${y}px`);
  tortaise.style.setProperty("--rotateX", `${flip ? "180" : "0"}deg`);
  tortaise.style.setProperty("--rotate", `${rotate}deg`);
};

window.addEventListener("keydown", handlingKey);
