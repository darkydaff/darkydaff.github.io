const photos = [
  { thumb: 'thumbs/IMG_6466.webp', full: 'full/IMG_6466.webp' },
  { thumb: 'thumbs/IMG_6748.webp', full: 'full/IMG_6748.webp' },
  { thumb: 'thumbs/IMG_6754.webp', full: 'full/IMG_6754.webp' },
  { thumb: 'thumbs/IMG_6810.webp', full: 'full/IMG_6810.webp' },
  { thumb: 'thumbs/IMG_6834.webp', full: 'full/IMG_6834.webp' },
  { thumb: 'thumbs/IMG_6837.webp', full: 'full/IMG_6837.webp' },
  { thumb: 'thumbs/IMG_6838.webp', full: 'full/IMG_6838.webp' },
  { thumb: 'thumbs/IMG_6839.webp', full: 'full/IMG_6839.webp' },
  { thumb: 'thumbs/IMG_6840.webp', full: 'full/IMG_6840.webp' },
  { thumb: 'thumbs/IMG_6843.webp', full: 'full/IMG_6843.webp' },
  { thumb: 'thumbs/IMG_7168.webp', full: 'full/IMG_7168.webp' },
  { thumb: 'thumbs/IMG_7175.webp', full: 'full/IMG_7175.webp' },
  { thumb: 'thumbs/IMG_7396.webp', full: 'full/IMG_7396.webp' },
  { thumb: 'thumbs/IMG_7408.webp', full: 'full/IMG_7408.webp' },
  { thumb: 'thumbs/IMG_7434.webp', full: 'full/IMG_7434.webp' },
  { thumb: 'thumbs/IMG_7524.webp', full: 'full/IMG_7524.webp' },
  { thumb: 'thumbs/IMG_8011.webp', full: 'full/IMG_8011.webp' },
  { thumb: 'thumbs/IMG_8025.webp', full: 'full/IMG_8025.webp' },
  { thumb: 'thumbs/IMG_8063.webp', full: 'full/IMG_8063.webp' },
  { thumb: 'thumbs/IMG_8070.webp', full: 'full/IMG_8070.webp' },
  { thumb: 'thumbs/IMG_8097.webp', full: 'full/IMG_8097.webp' },
  { thumb: 'thumbs/IMG_8112.webp', full: 'full/IMG_8112.webp' },
  { thumb: 'thumbs/IMG_8148.webp', full: 'full/IMG_8148.webp' },
  { thumb: 'thumbs/IMG_8241.webp', full: 'full/IMG_8241.webp' },
  { thumb: 'thumbs/IMG_8279.webp', full: 'full/IMG_8279.webp' },
  { thumb: 'thumbs/IMG_8290.webp', full: 'full/IMG_8290.webp' },
  { thumb: 'thumbs/IMG_8307.webp', full: 'full/IMG_8307.webp' },
  { thumb: 'thumbs/IMG_8643.webp', full: 'full/IMG_8643.webp' },
  { thumb: 'thumbs/IMG_8672.webp', full: 'full/IMG_8672.webp' },
  { thumb: 'thumbs/IMG_8697.webp', full: 'full/IMG_8697.webp' },
  { thumb: 'thumbs/IMG_8714.webp', full: 'full/IMG_8714.webp' },
  { thumb: 'thumbs/IMG_8718.webp', full: 'full/IMG_8718.webp' },
  { thumb: 'thumbs/IMG_8728.webp', full: 'full/IMG_8728.webp' },
  { thumb: 'thumbs/IMG_8731.webp', full: 'full/IMG_8731.webp' },
  { thumb: 'thumbs/IMG_8924.webp', full: 'full/IMG_8924.webp' },
  { thumb: 'thumbs/IMG_9099.webp', full: 'full/IMG_9099.webp' },
  { thumb: 'thumbs/IMG_9110.webp', full: 'full/IMG_9110.webp' },
  { thumb: 'thumbs/IMG_9224.webp', full: 'full/IMG_9224.webp' },
  { thumb: 'thumbs/IMG_9227.webp', full: 'full/IMG_9227.webp' },
  { thumb: 'thumbs/IMG_9239.webp', full: 'full/IMG_9239.webp' },
  { thumb: 'thumbs/IMG_9252.webp', full: 'full/IMG_9252.webp' },
  { thumb: 'thumbs/IMG_9320.webp', full: 'full/IMG_9320.webp' },
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const viewGalleryBtn = document.getElementById('viewGalleryBtn');

let currentIndex = 0;
let scale = 1;
let minScale = 1;
let imgPosX = 0;
let imgPosY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;

function buildGallery() {
  photos.forEach((photo, i) => {
    const img = document.createElement('img');
    img.src = photo.thumb;
    img.alt = `Photo ${i + 1}`;
    img.tabIndex = 0;
    img.loading = 'lazy';
    img.addEventListener('click', () => showImage(i));
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') showImage(i);
    });
    gallery.appendChild(img);
  });
}

function showImage(index) {
  if (index < 0) index = photos.length - 1;
  if (index >= photos.length) index = 0;
  currentIndex = index;

  lightboxImage.src = photos[currentIndex].full;

  resetZoomAndPosition();

  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  lightboxImage.focus?.();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
  resetZoomAndPosition();
}

function resetZoomAndPosition() {
  scale = 1;
  imgPosX = 0;
  imgPosY = 0;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const imgW = lightboxImage.naturalWidth || vw;
  const imgH = lightboxImage.naturalHeight || vh;

  let scaleX = (vw * 0.9) / imgW;
  let scaleY = (vh * 0.9) / imgH;

  minScale = Math.min(scaleX, scaleY, 1);
  if (minScale < 0.5) minScale = 0.5;
  scale = minScale;
  updateTransform();
}

function updateTransform() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const imgW = lightboxImage.naturalWidth * scale;
  const imgH = lightboxImage.naturalHeight * scale;

  const maxX = Math.max(0, (imgW - vw) / 2);
  const maxY = Math.max(0, (imgH - vh) / 2);

  if (imgPosX > maxX) imgPosX = maxX;
  if (imgPosX < -maxX) imgPosX = -maxX;
  if (imgPosY > maxY) imgPosY = maxY;
  if (imgPosY < -maxY) imgPosY = -maxY;

  lightboxImage.style.transform = `translate(${imgPosX}px, ${imgPosY}px) scale(${scale})`;
}

// Navigation
function showPrev() {
  showImage(currentIndex - 1);
}
function showNext() {
  showImage(currentIndex + 1);
}

lightboxImage.style.cursor = 'grab';

// Drag to pan fix with preventDefault to avoid native drag and allow proper panning
lightboxImage.addEventListener('pointerdown', (e) => {
  if (scale <= minScale) return; // only drag if zoomed in
  e.preventDefault(); // prevent native drag
  isDragging = true;
  dragStartX = e.clientX - imgPosX;
  dragStartY = e.clientY - imgPosY;
  lightboxImage.style.cursor = 'grabbing';
  lightboxImage.setPointerCapture(e.pointerId);
});

lightboxImage.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  imgPosX = e.clientX - dragStartX;
  imgPosY = e.clientY - dragStartY;
  updateTransform();
});

lightboxImage.addEventListener('pointerup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  lightboxImage.style.cursor = 'grab';
  lightboxImage.releasePointerCapture(e.pointerId);
});

lightboxImage.addEventListener('pointercancel', (e) => {
  if (!isDragging) return;
  isDragging = false;
  lightboxImage.style.cursor = 'grab';
  lightboxImage.releasePointerCapture(e.pointerId);
});

// Zoom with mouse wheel
lightboxImage.addEventListener('wheel', e => {
  e.preventDefault();

  const rect = lightboxImage.getBoundingClientRect();
  const offsetX = e.clientX - (rect.left + rect.width / 2);
  const offsetY = e.clientY - (rect.top + rect.height / 2);

  const zoomAmount = e.deltaY < 0 ? 0.15 : -0.15;
  let newScale = scale + zoomAmount;
  newScale = Math.min(5, Math.max(minScale, newScale));
  if (newScale === scale) return;

  const scaleChange = newScale / scale;
  imgPosX -= offsetX * (scaleChange - 1);
  imgPosY -= offsetY * (scaleChange - 1);
  scale = newScale;
  updateTransform();
}, { passive: false });

// Pinch zoom support
let ongoingTouches = [];

lightboxImage.addEventListener('touchstart', e => {
  if (e.touches.length === 2) {
    e.preventDefault();
    ongoingTouches = [...e.touches];
  }
}, { passive: false });

lightboxImage.addEventListener('touchmove', e => {
  if (e.touches.length === 2 && ongoingTouches.length === 2) {
    e.preventDefault();
    const [touch1, touch2] = e.touches;

    const prevDist = Math.hypot(
      ongoingTouches[0].clientX - ongoingTouches[1].clientX,
      ongoingTouches[0].clientY - ongoingTouches[1].clientY
    );

    const currDist = Math.hypot(
      touch1.clientX - touch2.clientX,
      touch1.clientY - touch2.clientY
    );

    let zoomAmount = (currDist - prevDist) * 0.005;
    let newScale = scale + zoomAmount;
    newScale = Math.min(5, Math.max(minScale, newScale));
    if (newScale !== scale) {
      const rect = lightboxImage.getBoundingClientRect();
      const centerX = (touch1.clientX + touch2.clientX) / 2 - (rect.left + rect.width / 2);
      const centerY = (touch1.clientY + touch2.clientY) / 2 - (rect.top + rect.height / 2);

      const scaleChange = newScale / scale;
      imgPosX -= centerX * (scaleChange - 1);
      imgPosY -= centerY * (scaleChange - 1);
      scale = newScale;
      updateTransform();
    }
    ongoingTouches = [...e.touches];
  }
}, { passive: false });

// Buttons
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
zoomInBtn.addEventListener('click', () => {
  let newScale = scale + 0.3;
  newScale = Math.min(5, newScale);
  if (newScale !== scale) {
    scale = newScale;
    updateTransform();
  }
});
zoomOutBtn.addEventListener('click', () => {
  let newScale = scale - 0.3;
  newScale = Math.max(minScale, newScale);
  if (newScale !== scale) {
    scale = newScale;
    updateTransform();
  }
});

// Keyboard navigation and escape to close
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'ArrowLeft') {
    showPrev();
  } else if (e.key === 'ArrowRight') {
    showNext();
  } else if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Smooth scroll for View Gallery button
viewGalleryBtn.addEventListener('click', () => {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});

// Reset zoom/position on window resize
window.addEventListener('resize', () => {
  if (!lightbox.classList.contains('active')) return;
  resetZoomAndPosition();
});

buildGallery();
