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

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 40; // سرعة العداد

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});
