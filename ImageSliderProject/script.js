let currentIndex = 0;
let image = document.getElementById("Image");
let heading = document.getElementById("heading");
let occupation = document.querySelector(".web");
let para = document.getElementById("para");
let lessThan = document.querySelector(".fa-less-than");
let greaterThan = document.querySelector(".fa-greater-than");

let array = [
  {
    image: "./images/rabbit1.jpg",
    heading: "Tanaka",
    occupations: "master",
    para: "I am a webDeveloper",
  },
  {
    image: "./images/rabbit2.jpg",
    heading: "Suzuki",
    occupations: "teacher",
    para: "I am a designer",
  },
  {
    image: "./images/rabbit3.jpg",
    heading: "Yamamoto",
    occupations: "doctor",
    para: "I am a programmer",
  },
  {
    image: "./images/rabbit4.jpg",
    heading: "Nakamura",
    occupations: "engineer",
    para: "I am an artist",
  },
  {
    image: "./images/rabbit5.jpg",
    heading: "Watanabe",
    occupations: "chef",
    para: "I am a chef",
  },
  {
    image: "./images/rabbit6.jpg",
    heading: "Kobayashi",
    occupations: "pilot",
    para: "I am a pilot",
  },
  {
    image: "./images/rabbit7.jpg",
    heading: "Inoue",
    occupations: "artist",
    para: "I am an artist",
  },
];

function updateContent() {
  let currentItem = array[currentIndex];
  image.src = currentItem.image;
  heading.textContent = currentItem.heading;
  occupation.textContent = currentItem.occupations;
  para.textContent = currentItem.para;
}

updateContent();

lessThan.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + array.length) % array.length;
  updateContent();
});

greaterThan.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % array.length;
  updateContent();
});
