
  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide_slick-slide");
  let autoSlide;

  // Hiển thị ảnh đầu tiên
  showSlide(slideIndex);

  // Hàm hiển thị slide
  function showSlide(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
  }
  
  // Chuyển slide theo hướng
  function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
    resetAutoSlide(); // reset lại bộ đếm auto khi bấm nút
  }

  // Tự động chạy slide
  function autoPlay() {
    slideIndex++;
    showSlide(slideIndex);
  }

  // Cứ 3 giây đổi ảnh
  function startAutoSlide() {
    autoSlide = setInterval(autoPlay, 3000);
  }

  // Reset lại auto khi bấm nút
  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Khởi động auto
  startAutoSlide();

