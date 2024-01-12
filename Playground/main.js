document.addEventListener("DOMContentLoaded", function () {
  //accesing element get by class
  let heading = document.querySelector(".head");

  //accesing element get by id
  let sec = document.getElementById("ss");

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

  //exmple one closures function
  function makeGreet(greet) {
    let greeting = greet;

    return function callName(name) {
      return `${greeting} ${name}`;
    };
  }

  //what is closures
  // A function inside decalare variable and assign value
  // retrun another function in child function use the
  // parent function variable  and  call parent function and assing result
  // to one variable and use that variable and again call the child function
  // it still memoraised the parent function variable

  let makes = makeGreet("Good Morning");
  let makes1 = makeGreet("Good Night");

  console.log(makes("Manoj"));
  console.log(makes1("Prem Kumar"));

  //exmple two closures
  const game = (gameName) => {
    let score = 0;
    return function getScroe() {
      score++;

      console.log(`The ${gameName} match scrore is ${score}`);
    };
  };

  let cricket = game("Cricket");
  let kabbadi = game("Kabbadi");

  document.querySelector(".Kabbadi").addEventListener("click", kabbadi);

  document.querySelector(".cricket").addEventListener("click", cricket);
});
