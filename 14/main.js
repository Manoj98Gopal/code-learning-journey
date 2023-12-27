document.addEventListener("DOMContentLoaded", function () {
  const hambarger = document.querySelector(".hambargur");

  const navList = document.querySelector(".nav-list");

  const hamburgerIcon = document.getElementById("hamburgerIcon");

  hambarger.addEventListener("click", function () {
    navList.classList.toggle("active");

    const newIcon = navList.classList.contains("active")
      ? "./images/cancel.svg"
      : "./images/listicon.svg";

    hamburgerIcon.src = newIcon;
  });
});
