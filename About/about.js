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
// 2. أنيميشن العدادات بالأرقام (Animated Counters)
const counters = document.querySelectorAll(".counter");

let counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.dataset.target);

        const duration = 2000; // مدة الأنيميشن بالكامل (ثانيتين)
        const frameRate = 30; // بيتحدث كل 30 مللي ثانية (حوالي 33 إطار في الثانية)
        const totalSteps = duration / frameRate;
        const increment = target / totalSteps; // تحسب العداد يزيد كام في كل خطوة

        let count = 0;

        const counting = setInterval(() => {
          count += increment;
          if (count >= target) {
            counter.innerText = target; // التأكد من الوقوف عند الرقم المظبوط تماماً
            clearInterval(counting);
          } else {
            counter.innerText = Math.ceil(count);
          }
        }, frameRate); // التايم المظبوط هنا (30ms)

        observer.unobserve(counter);
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
