const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-prev-btn');
const nextBtn = document.querySelector('.slider-next-btn');
const images = ['3.jpg', '5.jpg', '6.jpg', '8.jpg'];
let currentImage = 0;

slider.querySelector('.slider-image').src = images[currentImage];

if (currentImage === 0) {
  prevBtn.style.display = 'none';
}

if (currentImage === images.length - 1) {
  nextBtn.style.display = 'none';
}

prevBtn.addEventListener('click', () => {
  currentImage--;
  slider.querySelector('.slider-image').src = images[currentImage];

  if (currentImage === 0) {
    prevBtn.style.display = 'none';
  }

  if (currentImage < images.length - 1) {
    nextBtn.style.display = 'block';
  }
});

nextBtn.addEventListener('click', () => {
  currentImage++;
  slider.querySelector('.slider-image').src = images[currentImage];

  if (currentImage === images.length - 1) {
    nextBtn.style.display = 'none';
  }

  if (currentImage > 0) {
    prevBtn.style.display = 'block';
  }
});
