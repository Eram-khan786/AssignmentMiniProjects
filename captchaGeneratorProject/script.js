let captcha = document.getElementById("captcha");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wholeBox = document.getElementById("wholeBox");
let changeCaptchaBtn = document.getElementById("click");

var output = "";

function generateRandomAionabet() {
  output = "";
  let alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    output += alphabet[randomIndex];
  }
  captcha.innerHTML = output;
}

function isCorrectCaptcha() {
  let existingMessage = wholeBox.querySelector(".message");
  if (existingMessage) {
    wholeBox.removeChild(existingMessage);
  }

  let output1 = document.createElement("h1");
  output1.classList.add("message");
  if (input.value === output) {
    output1.innerHTML = "Yey You entered the right captcha";
  } else {
    output1.innerHTML = "Oh No , Please try again";
  }

  wholeBox.appendChild(output1);
}

changeCaptchaBtn.addEventListener("click", generateRandomAlphabet);
btn.addEventListener("click", isCorrectCaptcha);
generateRandomAlphabet();
