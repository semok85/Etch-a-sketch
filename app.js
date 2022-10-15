const label = document.querySelector(".label");
const slider = document.querySelector("#slider");
const canvas = document.querySelector(".canvas");
const colorPic = document.querySelector("#color-pic");
const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".button");
const button = document.querySelector(".button");
const eraser = document.querySelector("#eraser");
const color = document.querySelector("#color");
const rainbow = document.querySelector("#rainbow");
const randomValue = () => {
  return Math.floor(Math.random() * 255);
};

//creating function canvas resolution
const resolution = (numPxl) => {
  for (let i = 1; i <= numPxl * numPxl; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.setAttribute("id", `pixel-${i}`);
    canvas.appendChild(pixel);
    canvas.setAttribute(
      "style",
      `grid-template-columns: repeat(${numPxl}, 1fr); grid-template-rows: repeat(${numPxl}, 1fr) ;`
    );
  }
};
resolution(slider.value);

//drawing function
const drawing = (color) => {
  const pixels = document.querySelectorAll(".pixel");
  const draw = (e) => {
    e.target.setAttribute("style", `background-color: ${color}`);
  };
  for (let pixel of pixels) {
    pixel.addEventListener("click", draw);
  }
};

drawing(colorPic.value);

//clear function
const clear = () => {
  canvas.innerHTML = "";
  resolution(slider.value);
  drawing(colorPic.value);
};

//set resolution with slider input

const onChangeSlider = () => {
  label.textContent = `${slider.value} X ${slider.value}`;
  clear();
};
slider.addEventListener("change", onChangeSlider);

//click button function
const onClickButton = (e) => {
  const siblings = btnContainer.children;
  for (let sibling of siblings) {
    sibling.classList.remove("active");
  }
  e.target.classList.add("active");
};

for (let button of buttons) {
  button.addEventListener("click", onClickButton);
}

//create eraser function
const onErase = () => {
  const pixels = document.querySelectorAll(".pixel");
  for (let pixel of pixels) {
    const erasePixel = () => {
      pixel.style = "background-color: white";
    };
    pixel.addEventListener("click", erasePixel);
  }
};
eraser.addEventListener("click", onErase);

//create main color drawing function
const onMainColor = () => {
  const pixels = document.querySelectorAll(".pixel");
  for (let pixel of pixels) {
    const drawPixel = () => {
      pixel.style = `background-color: ${colorPic.value}`;
    };
    pixel.addEventListener("click", drawPixel);
  }
};
color.addEventListener("click", onMainColor);

//create rainbow drawing function
const onRainbow = () => {
  const pixels = document.querySelectorAll(".pixel");
  for (let pixel of pixels) {
    const drawPixel = () => {
      let rainbowColor = `rgb(${randomValue()},${randomValue()},${randomValue()})`;
      pixel.style = `background-color: ${rainbowColor}`;
    };
    pixel.addEventListener("click", drawPixel);
  }
};
rainbow.addEventListener("click", onRainbow);
