// 1. القائمة الجانبية للموبايل
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

// 2. فلترة الوجهات (Filtering Logic)
let  filterBtns = document.querySelectorAll(".filter-btn");
let destCards = document.querySelectorAll(".dest-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    let filter = btn.dataset.filter;
    destCards.forEach((card) => {
      let category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
