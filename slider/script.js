let currentIndex = 0;
let imageElement = document.getElementById("image");
let prevButton = document.querySelector(".prevBtn");
let nextButton = document.querySelector(".nextBtn");

let images = [
  { image: "./images/image1.jpeg" },
  { image: "./images/image2.jpeg" },
  { image: "./images/image3.jpg" },
  { image: "./images/image4.jpg" },
  { image: "./images/image5.jpg" },
];

function updateImage() {
  imageElement.src = images[currentIndex].image;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Initialize with the first image
updateImage();
