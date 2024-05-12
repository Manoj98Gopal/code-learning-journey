const canva = document.querySelector(".skech-board");
const shakeBtn = document.querySelector(".shake-btn");
const MOVE_AMOUNT = 10;

const ctx = canva.getContext("2d");

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

const { width, height } = canva;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const draw = ({ key }) => {
  hue += 10;

  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
};

const handleKey = (e) => {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
};

const clearCanva = () => {
    canva.classList.add("shake");
    
    canva.addEventListener(
        "animationend",
        () => {
            canva.classList.remove("shake");
        });
    ctx.clearRect(0, 0, width, height);
};

shakeBtn.addEventListener("click", clearCanva);

console.log("width ===", width, height);

window.addEventListener("keydown", handleKey);
