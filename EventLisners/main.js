const handleClick = () => {
  console.log("Clicked me");
};

const handleClickNew = (e) => {
  console.log("Clicked me new 10 buttons",e.target.innerText);
};

//selecting the btn
let btn = document.querySelector(".btn");
let anbtn = document.querySelector(".buut");

// adding the event listener
// here i am doing binding the function
// i am selecting the button and binding with the function
btn.addEventListener("click", handleClick);
anbtn.addEventListener("click", handleClick);   

// removing the eventlistener
// here i am doing unbinding the function
btn.removeEventListener("click", handleClick);

//selecting the all buttons
let btns = document.querySelectorAll(".newbtn");

// console.log(btns);


// looping the each button and binding the function 
btns.forEach((data) => {
  return data.addEventListener("click", handleClickNew);
});
