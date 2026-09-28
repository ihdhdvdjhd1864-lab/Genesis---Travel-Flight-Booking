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
// 2. معالجة إرسال الفورم (Form Handling)
const contactForm = document.getElementById("contactForm");
const formAlert = document.getElementById("formAlert");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // إظهار رسالة النجاح
    formAlert.innerText = "Thank you! Your message has been sent successfully.";
    formAlert.classList.add("success");
    // تفريغ المدخلات
    contactForm.reset();
    // إخفاء الرسالة بعد 4 ثواني
    setTimeout(() => {
      formAlert.classList.remove("success");
    }, 4000);
  });
}
