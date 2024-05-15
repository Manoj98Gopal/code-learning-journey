const buttons = document.querySelectorAll(".btn");
const outterModel = document.querySelector(".model-outter");
const innerModel = document.querySelector(".model-inner");

const handleButtons = (e) => {
  const btn = e.currentTarget;
  const card = btn.closest(".card");

  const image = card.querySelector("img").src;
  const description = card.dataset.desc;
  const name = card.querySelector("h2");

  innerModel.innerHTML = `
  <img src="${image.replace("200", 580)}" alt="${name}" />
  <h1>${name.innerHTML}</h1>
  <p>${description}</p>
  `;

  outterModel.classList.add("open");
};

buttons.forEach((elements) => {
  elements.addEventListener("click", handleButtons);
});

const closeModel = () => {

    outterModel.classList.remove("open");
}

outterModel.addEventListener("click", (e) => {
  const isOutter = !e.target.closest(".model-inner");

  if (isOutter) {
    closeModel()
  }
});


window.addEventListener("keydown",(e) => {

  if(e.key === "Escape"){
    closeModel()
  }

})