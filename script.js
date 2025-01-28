// Show/Hide Sections
document.getElementById("explore-btn").addEventListener("click", function() {
  document.getElementById("lyric-section").classList.add("hidden");
  document.getElementById("slideshow-section").classList.remove("hidden");
  currentIndex = 0;
  clickCount = 0;
  updateSlideshow();
});

// Slideshow Functionality
const images = [
  { src: 'images/kaliyahsc1.png', caption: 'cute moment on ft' },
  { src: 'images/kaliyahsc2.png', caption: 'first ft' },
  { src: 'images/kaliyahsc3.png', caption: 'cute moment of hoco dress' },
];

let currentIndex = 0;
let clickCount = 0;
let totalClicks = 0; // Add total clicks counter

const slideshowImg = document.getElementById('slideshow-img');
const caption = document.getElementById('caption');

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlideshow();
});

document.getElementById('next-btn').addEventListener('click', () => {
  totalClicks++; // Increment total clicks
  currentIndex = (currentIndex + 1) % images.length;
  updateSlideshow();
  
  // Show message section after 3 clicks
  if (totalClicks >= 3) {
    document.getElementById("slideshow-section").classList.add("hidden");
    document.getElementById("message-section").classList.remove("hidden");
    document.getElementById("reasons-btn").classList.remove("hidden"); // Show the reasons button
  }
});

function updateSlideshow() {
  slideshowImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].caption;
}

// Initialize slideshow
updateSlideshow();

document.getElementById('message-section').addEventListener('click', function() {
  document.getElementById('message-section').classList.add('hidden');
  document.getElementById('reasons-section').classList.remove('hidden');
});

// Add event listener for the reasons button
document.getElementById("reasons-btn").addEventListener("click", function() {
  document.getElementById("message-section").classList.add("hidden");
  document.getElementById("reasons-section").classList.remove("hidden");
  document.getElementById("letter-section").classList.remove("hidden"); // Show the letter section
});
