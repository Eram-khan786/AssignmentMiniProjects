let colorCode = document.querySelector("span");
let body = document.querySelector("body");
console.log(colorCode.innerHTML);

colorCode.addEventListener("click", () => {
  let redNum = Math.floor(Math.random() * 256);
  let BlueNum = Math.floor(Math.random() * 256);
  let GreenNum = Math.floor(Math.random() * 256);
  let generateRGBColor = `rgb(${redNum},${BlueNum},${GreenNum})`;
  colorCode.textContent = generateRGBColor;
  console.log(generateRGBColor);
  body.style.background = generateRGBColor;
  colorCode.style.cursor = "pointer";
});
