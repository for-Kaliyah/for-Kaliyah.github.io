// Show/Hide Sections
document.getElementById("explore-btn").addEventListener("click", function() {
  document.getElementById("lyric-section").classList.add("hidden");
  document.getElementById("slideshow-section").classList.remove("hidden");
});

// Slideshow Functionality
const images = [
  { src: "placeholder1.jpg", caption: "Caption for the first memory." },
  { src: "placeholder2.jpg", caption: "Caption for the second memory." },
  { src: "placeholder3.jpg", caption: "Caption for the third memory." }
];

let currentImage = 0;

function updateSlideshow() {
  document.getElementById("slideshow-img").src = images[currentImage].src;
  document.getElementById("caption").textContent = images[currentImage].caption;
}

document.getElementById("prev-btn").addEventListener("click", function() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  updateSlideshow();
});

document.getElementById("next-btn").addEventListener("click", function() {
  currentImage = (currentImage + 1) % images.length;
  updateSlideshow();
});

// Initialize slideshow
updateSlideshow();

// Show the final message
document.getElementById("next-btn").addEventListener("click", function() {
  if (currentImage === 0) {
    document.getElementById("slideshow-section").classList.add("hidden");
    document.getElementById("message-section").classList.remove("hidden");
  }
});
