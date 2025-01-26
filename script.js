// Show/Hide Sections
document.getElementById("explore-btn").addEventListener("click", function() {
  document.getElementById("lyric-section").classList.add("hidden");
  document.getElementById("slideshow-section").classList.remove("hidden");
});

// Slideshow Functionality
const images = [
  { src: 'images/kaliyahsc1.png', caption: 'cute moment on ft' },
  { src: 'images/kaliyahsc2.png', caption: 'first ft' },
  { src: 'imageskaliyahsc3.png', caption: 'cute moment of hoco dress' },
];

let currentIndex = 0;

const slideshowImg = document.getElementById('slideshow-img');
const caption = document.getElementById('caption');

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlideshow();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlideshow();
});

function updateSlideshow() {
  slideshowImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].caption;
}

// Initialize slideshow
updateSlideshow();

// Show the final message
document.getElementById("next-btn").addEventListener("click", function() {
  if (currentImage === 0) {
    document.getElementById("slideshow-section").classList.add("hidden");
    document.getElementById("message-section").classList.remove("hidden");
  }
});
