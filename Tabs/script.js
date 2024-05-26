let history = document.getElementById("history");
let vision = document.getElementById("vision");
let goals = document.getElementById("goals");
let para1 = document.querySelector(".para1");
let headingPara = document.querySelector(".headingPara");
let mainHeadings = document.querySelectorAll(".mainHeading");

document.addEventListener("DOMContentLoaded", () => {
  headingPara.innerHTML = "History";
  para1.innerHTML =
    "JavaScript, created by Brendan Eich in 1995 for Netscape Navigator, revolutionized web development by enabling dynamic, client-side interactivity. Standardized as ECMAScript in 1997, it became ubiquitous across browsers. Subsequent versions enhanced its capabilities, solidifying its role in web, mobile, and server-side development with frameworks like Node.js and React.";
  updateBackground("history");
});

history.addEventListener("click", () => {
  headingPara.innerHTML = "History";
  para1.innerHTML =
    "JavaScript, created by Brendan Eich in 1995 for Netscape Navigator, revolutionized web development by enabling dynamic, client-side interactivity. Standardized as ECMAScript in 1997, it became ubiquitous across browsers. Subsequent versions enhanced its capabilities, solidifying its role in web, mobile, and server-side development with frameworks like Node.js and React.";
  updateBackground("history");
});

vision.addEventListener("click", () => {
  headingPara.innerHTML = "Vision";
  para1.innerHTML =
    "Vision is the ability to perceive and interpret the surrounding environment using light detected by the eyes. It involves the conversion of light into neural signals by the retina, which are processed by the brain to form images. This complex process enables organisms to navigate and interact with their surroundings.";
  updateBackground("vision");
});

goals.addEventListener("click", () => {
  headingPara.innerHTML = "Goals";
  para1.innerHTML =
    "Goals are desired outcomes or achievements that individuals or groups aim to accomplish. They provide direction, motivation, and a sense of purpose. Setting clear, specific, and attainable goals helps guide actions and measure progress, whether in personal development, career advancement, or project completion. Effective goals often follow the SMART criteria: Specific, Measurable, Achievable, Relevant, and Time-bound.";
  updateBackground("goals");
});

function updateBackground(activeId) {
  mainHeadings.forEach((heading) => {
    heading.style.background = heading.id === activeId ? "white" : "gray";
  });
}
