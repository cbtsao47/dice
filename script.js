const button = document.querySelector(".dice__trigger");
const img = document.querySelector(".dice__img");
const imgWrapper = document.querySelector(".dice__result");
const restart = document.querySelector(".dice__restart");
const bodyTag = document.querySelector("body");
const changeColor = document.querySelector(".dice__change-color");
const reset = function(event) {
  TweenMax.to(".dice__result", 0, {
    rotation: 0,
    y: 0
  });
};
const changeDice = function(event) {
  TweenMax.to(".dice__result", 3, {
    y: 500,
    ease: Bounce.easeOut,
    rotation: 900
  });
  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      let imgNumber = Math.ceil(Math.random() * 6);
      img.src = `./assets/dice${imgNumber}.png`;
    }, i * 150);
  }

  setTimeout(() => {
    let imgNumber = Math.ceil(Math.random() * 6);
    img.src = `./assets/dice${imgNumber}.png`;
  }, 3000);
};

button.addEventListener("click", event => changeDice(event));

restart.addEventListener("click", event => reset(event));

changeColor.addEventListener("click", function(event) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  bodyTag.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

//need a random color
