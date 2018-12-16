const button = document.querySelector(".dice__trigger");
const img = document.querySelector(".dice__img");
const imgWrapper = document.querySelector(".dice__result");
const reset = function() {
  console.log("hi");
  TweenMax.to(".dice__result", 0, {
    rotation: 0
  });
};
const changeDice = function(event) {
  TweenMax.to(".dice__result", 3, {
    rotation: 720,
    onComplete: reset
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
