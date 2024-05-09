const btn = document.querySelector(".cool");

const buttons = document.querySelectorAll(".butt");

// console.log(buttons);

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

// diffrence  between target and current target
// if special button is nested  element ,  target will get where will click
// currentTarget will get entire button  element

const spec = document.querySelector(".special");

const handleSpecEvent = (e) => {
  //data accessing from the button
  console.log(e.currentTarget.dataset.q);

  //target element
  // click bold element you will get diffrence between  target and current target
  console.log(e.target);

  // currentTarget element
  console.log(e.currentTarget);

  // if you click the button , button event only trigger , it wont trigger window event
  // because we are usong stopPropagation
  e.stopPropagation();
  console.log("render button elemet");
};

spec.addEventListener("click", handleSpecEvent);

// Bubbling
//bubbling means , event is bubbling  here  i am adding event lisners to window and  button
// when i click the button ,  it click button, window both technically
// event is bubbling  bottom to top approch

// propagation
// stopPropagation we are use for  stoping the bubbling of event

//capture
// capture event means , bubbling is  bottom to top approch event triggering , capture is reverse top to bottom event triggering
// example if you allow capture true, if you click the button first  trigger the window listener after that button listener

const handleImageEvents = (e) => {
  console.log("image event is trriggering");
  console.count();
  e.stopPropagation();
};

const image = document.querySelector(".image");

// click, dblclick, mouseover,contextmenu,mousemove,
image.addEventListener("mousemove", handleImageEvents);

console.log(image);

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  () => {
    // console.log("Clicking the window element");

    // console.log(window.pageXOffset)
    // console.log(document.documentElement.scrollTop)

    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // console.log(currentScrollTop);

    if (currentScrollTop > lastScrollTop) {
      console.log("Scrolling down (bottom moving)");
    } else {
      console.log("Scrolling up (top moving)");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
  // {capture:true}
);
