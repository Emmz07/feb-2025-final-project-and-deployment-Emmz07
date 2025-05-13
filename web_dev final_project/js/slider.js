document.addEventListener('DOMContentLoaded', function() {
  // Featured posts slider
  const slider = document.getElementById('featured-slider');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (slider && prevBtn && nextBtn) {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Hide all slides except the first one
    function initSlider() {
      updateSlider();
    }
    
    function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateButtons();
      
      // Auto-play control
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        startAutoPlay();
      }
    }
    
    function updateButtons() {
      prevBtn.disabled = currentSlide === 0;
      nextBtn.disabled = currentSlide === totalSlides - 1;
    }
    
    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
      }
    }
    
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play
    let autoPlayInterval;
    
    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        if (currentSlide < totalSlides - 1) {
          nextSlide();
        } else {
          currentSlide = 0;
          updateSlider();
        }
      }, 5000); // 5 seconds
    }
    
    // Initialize the slider
    initSlider();
    startAutoPlay();
    
    // Pause auto-play when hovering over the slider
    slider.addEventListener('mouseenter', () => {
      clearInterval(autoPlayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
      startAutoPlay();
    });
    
    // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next slide
        nextSlide();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous slide
        prevSlide();
      }
    }
  }
});