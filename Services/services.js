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

// 2. تفاصيل الخدمات عبر النافذة المنبثقة (Modal)
const serviceCards = document.querySelectorAll(".service-card");
const modal = document.getElementById("serviceModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

const serviceDetails = {
  flight: {
    title: "Flight Booking Details",
    desc: "We search hundreds of airlines to offer you real-time prices, baggage options, seat choices, and seamless online check-ins.",
  },
  hotel: {
    title: "Hotel Reservation Details",
    desc: "Choose from over 1,000,000 stays worldwide. Enjoy member-only rates, free cancellations, and pay-at-property choices.",
  },
  car: {
    title: "Airport Transfer Details",
    desc: "Seamless pick-up from the arrivals terminal with professional drivers tracking your flight status live for zero delay.",
  },
  vip: {
    title: "VIP Lounge Access Details",
    desc: "Skip airport noise. Enjoy comfortable seating, quiet zones, private shower facilities, and gourmet buffets worldwide.",
  },
};

serviceCards.forEach((card) => {
  const btn = card.querySelector(".btn-details");
  btn.addEventListener("click", () => {
    const key = card.dataset.service;
    if (serviceDetails[key]) {
      modalTitle.innerText = serviceDetails[key].title;
      modalDesc.innerText = serviceDetails[key].desc;
      modal.classList.add("active");
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
