const NUMBER_OF_SLIDES = 3;
const slides = document.body.querySelectorAll("div.slides");
const dots = document.body.querySelectorAll("img.demo");
const captionText = document.getElementById("caption");
const prev = document.querySelector("a.prev");
const next = document.querySelector("a.next");

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => showSlides(index))
);

prev.addEventListener("click", () => {
  const currentIndex = getCurrentActiveSlide();
  const prevIndex =
    ((NUMBER_OF_SLIDES + (currentIndex - 2)) % NUMBER_OF_SLIDES) + 1;
  showSlides(prevIndex - 1);
});

next.addEventListener("click", () =>
  showSlides(getCurrentActiveSlide() % NUMBER_OF_SLIDES)
);

function getCurrentActiveSlide() {
  return [...slides].findIndex((slide) => !slide.hasAttribute("hidden")) + 1;
}

function showSlides(index) {
  slides.forEach((slide) => slide.toggleAttribute("hidden", true));
  slides[index].toggleAttribute("hidden", false);

  dots.forEach((dot) => dot.classList.toggle("active", false));
  dots[index].classList.toggle("active", true);

  captionText.innerHTML = dots[index].alt;
}

showSlides(0);
