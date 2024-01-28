const handleClick = () => {
//   console.log("Clicked me");
};

const handleClickNew = (e) => {

    // this target will get the particular element
    // this diffrence between  target and currentTarget is  ,when if you added nested element add event lisner to that then you will get diffrence 
    let target = e.target

    // this target will get the entaire element
    let currentTarget = e.currentTarget

    //this variable getting the variables added to element
    let values = e.target


  console.log("clicking button")

  //why we use this function for exmple  im my html i have button and added event listener  and togethere add lisner to window
  //when you click the button it showing message of both lisner functions 
  // e.stopPropagation();


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


// looping the each button and binding the function 
btns.forEach((data) => {
  return data.addEventListener("click", handleClickNew,);
});


let book = document.querySelector(".book")


book.addEventListener('mousemove',(e) => {
  console.log("image overing ")
  e.stopPropagation();
})


//bubbling means  in our html body has a button when click the button it clicking the body, and html and document finally window
// if you click the any thing it will go one by one inner that is bubbling how to stop this with the help of  stop.propagation()



//capture is third argument, if you give capture true it is triggering the level diffrent 
//normally if you click the button first button and last window 
//if you give capture true, trigger leve diffrent first trigger the window level after that button level 
window.addEventListener('click',function(){
  console.log("clicking the window ...")
},{capture:true})

