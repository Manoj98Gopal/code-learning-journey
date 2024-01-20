document.addEventListener("DOMContentLoaded", () => {
  // Make div
  let mydiv = document.createElement("div");

  // add a class to wrapper to it
  mydiv.classList.add("wrapper");

  // put it into the body
  document.body.appendChild(mydiv);

  //add styles to that wrapper
  let wrapperClass = document.querySelector(".wrapper");

  wrapperClass.style.background = "powderblue";
  wrapperClass.style.padding = "10px";

  // make an unorder list
  let unroderList = document.createElement("ul");

  // add three list item  with the words "one two three" in them
  let list = document.createElement("li");
  let list1 = document.createElement("li");
  let list2 = document.createElement("li");

  list.innerHTML = "One";
  list1.innerHTML = "two";
  list2.innerHTML = "three";

  unroderList.appendChild(list);
  unroderList.appendChild(list1);
  unroderList.appendChild(list2);

  //efficent way of appending list
  let words = ["four", "five", "six"];

  for (let i = 0; i < words.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = words[i];
    unroderList.appendChild(listItem);
  }

  //put that list into the above wrapper
  mydiv.appendChild(unroderList);

  //create an a image
  let myImage = document.createElement("img");

  //set the source to an image
  myImage.src = "https://picsum.photos/500";

  //set the width to 250
  myImage.width = 250;

  //add a class of cute
  myImage.classList.add("cute");

  //add an alt of cutepuppy
  myImage.alt = "cutepuppy";

  //append this image to wrapper div
  mydiv.appendChild(myImage);

  //with HTML string , make a div, with the two paragraphs in side of it

  let newDiv = `<div class="para"> 
  
  <p>Deleniti illum et exercitationem excepturi placeat fugiat assumenda libero numquam temporibus totam quae quod molestiae accusantium pariatur ad ipsam laudantium, voluptate natus!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.numquam temporibus totam quae quod molestiae accusantium pariatur ad ipsam laudantium, voluptate natus!</p>

  </div>`;

  //put this div before the unorder list
  let wrapperDiv = document.querySelector(".wrapper");

  wrapperDiv.insertAdjacentHTML("afterbegin", newDiv);

  //add a class to the second paragrap  called warning
  let paragraph = document.querySelector(".para");

  paragraph.children[1].classList.add("warning");

  //remove the first paragraph
  paragraph.children[0].remove();

  //create a function called generatePlayercard that takes in three arguments :  name, age, and height
  //have that function return html that looks like this :
  //  <div class="playerCard">
  //  <h2> NAME - AGE </h2>
  //  <p> They are HEIGHT and AGE years old. In Dog years this person would be HEIGHT * AGE.  That would be a tall dog!</p>
  //  </div>

  function createPlayCard(name, age, height) {
    let html = `
    <div class="playerCard">
    <h2> ${name} - ${age} </h2>
    <p> They are ${height} and ${age} years old. In Dog years this person would be ${
      height * age
    }.  That would be a tall dog!</p>
    <button class="delete" >Click</button>
    </div>
   `;

    return html;
  }

  // make a new div with a class of cards

  let card = document.createElement("div");
  card.classList.add("cards");

  let cardHtml = createPlayCard("Ram", 29, 6.5);

  //have that function make four cards
  let details = [
    {
      name: "Manoj",
      age: 25,
      height: 6,
    },
    {
      name: "Prem Kumar",
      age: 26,
      height: 5,
    },
    {
      name: "VarunBN",
      age: 24,
      height: 6,
    },
  ];

  for (let i = 0; i < details.length; i++) {
    const { name, age, height } = details[i];
    cardHtml += createPlayCard(name, age, height);
  }

  //append  those cards to the div
  card.innerHTML = cardHtml

  //put the div into the DOM just before the wrapper element

  let temp = document.querySelector('.wrapper')
  document.body.insertBefore(card,temp)

  //put a delete button on each card so when we click it , the whole card is removed

  let button = document.querySelectorAll('.delete')


  function deleteCard(e){

    let buttonClicked = e.currentTarget
    buttonClicked.parentElement.remove()

  }

 button.forEach(btn => btn.addEventListener('click',deleteCard)) 
  
});
