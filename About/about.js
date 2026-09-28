// 1. القائمة الجانبية للموبايل (Mobile Navigation Toggle)
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
let Dabiya = document.querySelector(".Dabiya");
if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    Dabiya.classList.toggle("active");
  });
}
Dabiya.addEventListener("click", () => {
  navLinks.classList.remove("active");
  Dabiya.classList.remove("active");
});

// 2. أنيميشن العدادات بالأرقام (Animated Counters)
const counters = document.querySelectorAll(".counter");
let counterObserver = new IntersectionObserver(
  (ele, kimo) => {
    ele.forEach((el) => {
      if (el.isIntersecting) {
        let counter = el.target;
        let target = Number(counter.dataset.target);
        let count = 0;
        let counting = setInterval(() => {
          if (count >= target) {
            clearInterval(counting);
          } else {
            count++;
            counter.innerText = count;
          }
        });
        kimo.unobserve(el.target);
      }
    });
  },
  {
    threshold: 0.3,
  },
);
counters.forEach((counter) => {
  counterObserver.observe(counter);
});
