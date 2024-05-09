const btn = document.querySelector(".cool");

const buttons = document.querySelectorAll(".butt");

console.log(buttons);

const handleClickEvent = () => {
  console.log("clicking the button");
};

const handleClick = (e) => {
  console.log("button click", e.target.innerText);
};

buttons.forEach((data) => {
  data.addEventListener("click", handleClick);
});

btn.addEventListener("click", handleClickEvent);
btn.removeEventListener("click", handleClickEvent);
