let slideIndex = 0;
let slides = document.querySelectorAll(".slide_slick-slide");
let dots = document.querySelectorAll(".dot");
let interval = null; // để quản lý auto-play

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) dot.classList.add("active");
  });
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// gán sự kiện click cho dots
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    let index = parseInt(dot.getAttribute("data-index"));
    showSlide(index);
    resetAutoPlay(); // reset lại thời gian khi người dùng click
  });
});

// auto-play
function startAutoPlay() {
  interval = setInterval(nextSlide, 5000); // đổi slide mỗi 3 giây
}

function stopAutoPlay() {
  clearInterval(interval);
}

function resetAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

// bắt đầu chạy khi load trang
startAutoPlay();

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoPlay(); // reset auto-play mỗi khi bấm
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoPlay();
});