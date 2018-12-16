const button = document.querySelector(".dice__trigger");
const img = document.querySelector(".dice__img");

const changeDice = function(event) {
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
