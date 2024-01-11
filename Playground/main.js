



document.addEventListener("DOMContentLoaded", function () {

  //accesing element get by class  
  let heading = document.querySelector(".head");

  //accesing element get by id
  let sec = document.getElementById('ss')

  console.log(heading);
  console.log(sec);


  //create function and change the text 
  const modify = () => {
    heading.innerHTML = "I modified this line!";
  };

  //access the button with the help of class
  let button = document.querySelector(".btn");


  //setting the event listenr after that give refrence to function
  button.addEventListener("click", modify);
});
