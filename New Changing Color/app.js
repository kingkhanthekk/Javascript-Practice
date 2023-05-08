const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  let rand1 = Math.floor(Math.random() * 256);
  let rand2 = Math.floor(Math.random() * 256);
  let rand3 = Math.floor(Math.random() * 256);
  let randColor = `rgb(${rand1},${rand2},${rand3})`;
  body.style.backgroundColor = randColor;
  h1.innerText = randColor;
});
