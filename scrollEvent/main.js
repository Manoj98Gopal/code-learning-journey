const button = document.querySelector(".btn");
const container = document.querySelector(".container");

button.disabled = true;

const handleScroll = (e) => {
  // console.log(e.currentTarget.scrollTop);
  // console.log(e.currentTarget.scrollHeight);
};

const handleObserve = (payload) => {
  //   console.log(payload[0].isIntersecting)

  if (payload[0].isIntersecting) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }

  //   if(payload[0].intersectionRatio)
};

const watching = new IntersectionObserver(handleObserve, {
  root: container,
  threshold: 0.5,
});

watching.observe(container.lastElementChild);

container.addEventListener("scroll", handleScroll);

// const call = async () => {
//   console.log("starting");
//   const data = await new Promise((resove) => {
//     setTimeout(() => {
//       resove(5);x 
//       console.log("calling the set");
//     }, 5000);
//   });
//   console.log("ending");
// };

// call();
