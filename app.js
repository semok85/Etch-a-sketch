const label = document.querySelector(".label");
const slider = document.querySelector("#slider");
const canvas = document.querySelector(".canvas");

for (let i = 1; i <= 100; i++) {
  const pixel = document.createElement("div");
  pixel.setAttribute("class", "pixel");
  pixel.setAttribute("id", `pixel-${i}`);

  canvas.appendChild(pixel);
}
const pixels = document.querySelectorAll(".pixel");
const draw = (e) => {
  e.target.setAttribute("style", `background-color: white`);
  console.log("click");
};
pixels.forEach((element) => {
  element.addEventListener("click", draw);
});

const onChangeSlider = () => {
  label.textContent = `${slider.value} X ${slider.value}`;
};
slider.addEventListener("change", onChangeSlider);
