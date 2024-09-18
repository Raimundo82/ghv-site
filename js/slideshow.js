const slides = document.body.querySelectorAll("div.slides");
const dots = document.body.querySelectorAll("img.demo");
const captionText = document.getElementById("caption");
const prev = document.querySelector("a.prev");
const next = document.querySelector("a.next");

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => showSlides(index))
);

prev.addEventListener(
  "click",
  () => showSlides(getCurrentActiveSlide() - 1) % 2
);

next.addEventListener("click", () => {
  const currentIndex = getCurrentActiveSlide();
  console.log(currentIndex);
  console.log((currentIndex + 1) % 3);
  showSlides((currentIndex + 1) % 3);
});

function getCurrentActiveSlide() {
  const index = [...slides].findIndex((slide) => !slide.getAttribute("hidden"));
  return index === 0 ? 3 : index;
}

function showSlides(index) {
  slides.forEach((slide) => slide.toggleAttribute("hidden", true));
  slides[index].toggleAttribute("hidden", false);

  dots.forEach((dot) => dot.classList.toggle("active", false));
  dots[index].classList.toggle("active", true);

  captionText.innerHTML = dots[index].alt;
}

showSlides(0);
