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


  let image = document.querySelector('.imag-container img ')

  let text = document.querySelector('.happy')


  let move = () => {


    if(image.classList.contains("rounded")){
      image.classList.remove("rounded")

    }else{
      image.classList.add("rounded")

    }


  }

  image.addEventListener("click",move)


  const openDraw = () => {

   let drawer = document.querySelector(".draw")

    drawer.classList.toggle('open')
  }


  let drawbtn = document.querySelector(".draw-btn")

  drawbtn.addEventListener('click',openDraw)




  console.log("asd image list ===",image.classList)

  console.log("text =====",text.innerHTML)

  text.textContent = "changed text"

  console.log("text =====",text.innerHTML)



  // create dom element with the help of js

  let myDiv = document.createElement('div')

  let head = document.createElement('h1')
  let head2 = document.createElement('h2')


  head.innerHTML = "I am first Heading "

  head2.innerHTML = "***********I am second Heading*********** "


  myDiv.appendChild(head)

 myDiv.insertAdjacentElement('beforeend',head2)


  let r = document.querySelector('.addhere')

  console.log("rrrr ===",r)

    r.appendChild(myDiv)


    let ulList = document.createElement('ul')
    let li = document.createElement('li')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')


    li.innerHTML = "two"
    li1.innerHTML = "One"
    li2.innerHTML = "Frour"
    li3.innerHTML = "Three"

    ulList.appendChild(li)
    ulList.appendChild(li1)
    ulList.appendChild(li2)
    ulList.appendChild(li3)


   




    document.body.appendChild(ulList)

});
