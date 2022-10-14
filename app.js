const label = document.querySelector(".label");
const slider = document.querySelector("#slider");
const canvas = document.querySelector(".canvas");
const colorPic = document.querySelector("#color-pic");
const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".button");
const button = document.querySelector(".button");

for (let i = 1; i <= 100; i++) {
  const pixel = document.createElement("div");
  pixel.setAttribute("class", "pixel");
  pixel.setAttribute("id", `pixel-${i}`);

  canvas.appendChild(pixel);
}
const pixels = document.querySelectorAll(".pixel");
const draw = (e) => {
  e.target.setAttribute("style", `background-color: ${colorPic.value}`);
  console.log("click");
};
pixels.forEach((element) => {
  element.addEventListener("click", draw);
});

const onChangeSlider = () => {
  label.textContent = `${slider.value} X ${slider.value}`;
};
slider.addEventListener("change", onChangeSlider);
//..............
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
