let fromSelect = document.querySelector("#fromSelect");
let fromCountry = document.querySelector("#fromCountry");
let toSelect = document.querySelector("#toSelect");
let toCountry = document.querySelector("#toCountry");
let departDate = document.querySelector("#departDate");
let toDate = document.querySelector("#toDate");
let returnDate = document.querySelector("#returnDate");
let fromDate = document.querySelector("#fromDate");
let classSelect = document.querySelector("#classSelect");
let tripTypeSelect = document.querySelector(".trip-type-select");
fromSelect.addEventListener("change", () => {
  switch (fromSelect.value) {
    case "JFK":
      fromCountry.textContent = "United States";
    case "CAI":
      fromCountry.textContent = "Egypt";
      break;
    case "FCO":
      fromCountry.textContent = "Italy";
      break;
    case "DXB":
      fromCountry.textContent = "UAE";
      break;

    default:
      break;
  }
});

toSelect.addEventListener("change", () => {
  switch (toSelect.value) {
    case "JFK":
      toCountry.textContent = "United States";
      break;
    case "CAI":
      toCountry.textContent = "Egypt";
      break;
    case "FCO":
      toCountry.textContent = "Italy";
      break;
    case "DXB":
      toCountry.textContent = "UAE";
      break;

    default:
      break;
  }
});

departDate.addEventListener("change", () => {
  toDate.textContent = departDate.value;
});
returnDate.addEventListener("change", () => {
  fromDate.textContent = returnDate.value;
});

let travelersBtn = document.querySelector("#travelersBtn");
let travelersMenu = document.querySelector(".travelers-menu");
let travelersCard = document.querySelector(".travelers-card");
travelersBtn.addEventListener("click", () => {
  travelersMenu.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!travelersCard.contains(e.target)) {
    travelersMenu.classList.remove("active");
  }
});

const travelers = {
  adults: 1,
  children: 0,
  infants: 0,
};

let counterButtons = document.querySelectorAll(".counter-btn");
let travelersCount = document.querySelector("#travelersCount");
counterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const action = button.dataset.action;
    if (action === "increase") {
      travelers[type]++;
    }
    if (action === "decrease") {
      if (type === "adults" && travelers[type] > 1) {
        travelers[type]--;
      }

      if (type !== "adults" && travelers[type] > 0) {
        travelers[type]--;
      }
    }
    document.querySelector(`#${type}Count`).textContent = travelers[type];

    travelersCount.textContent =
      travelers.adults + travelers.children + travelers.infants;
  });
});

let btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", () => {
  let arrDate = {
    DepartDate: departDate.value || "00/00/0000",
    ReturnDate: returnDate.value || "00/00/0000",
    fromSelect: fromSelect.value,
    toSelect: toSelect.value,
    travelersCount: travelersCount.textContent,
    classSelect: classSelect.value,
    tripTypeSelect: tripTypeSelect.value,
    adultsCount: document.querySelector("#adultsCount").textContent,
    childrenCount: document.querySelector("#childrenCount").textContent,
    infantsCount: document.querySelector("#infantsCount").textContent,
  };
  localStorage.setItem("arrDate", JSON.stringify(arrDate));
  window.location.href = "results.html";
});

// منيو
let hamburgerMenu = document.querySelector(".hamburger-menu");
let navLinks = document.querySelector(".nav-links");
let Dabiya = document.querySelector(".Dabiya");
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  Dabiya.classList.toggle("active");
});
let arrBtn = [Dabiya, navLinks];
arrBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    Dabiya.classList.remove("active");
  });
});

// عكس  مدينهات الوصول والوصول
const swapBtn = document.getElementById("swapBtn");

if (swapBtn && fromSelect && toSelect) {
  swapBtn.addEventListener("click", () => {
    let toSelectValue = toSelect.value;
    let fromSelectValue = fromSelect.value;
    [fromSelect.value, toSelect.value] = [toSelectValue, fromSelectValue];
    [fromCountry.textContent, toCountry.textContent] = [
      toCountry.textContent,
      fromCountry.textContent,
    ];
  });
}
// 2. بنجيب كل الأزرار اللي واخدة كلاس tab-btn
let tabBtns = document.querySelectorAll(".category-tabs .tab-btn");
let searchGrid = document.querySelector(".search-grid");
let widgetActionBar = document.querySelector(".widget-action-bar");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");
  });
});

let directDealButtons = document.querySelectorAll(".direct-deal-btn");
let arrDate = JSON.parse(localStorage.getItem("arrDate"));
directDealButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btn = e.currentTarget;
    // بنجمع بيانات العرض في نفس شكل كائن الرحلة اللي صفحة checkout.html مستنياه
    let selectedFlight = {
      id: Number(btn.dataset.id),
      airline: btn.dataset.airline,
      flightNumber: btn.dataset.flightnumber,
      from: btn.dataset.from,
      to: btn.dataset.to,
      departureTime: btn.dataset.departure,
      arrivalTime: btn.dataset.arrival,
      duration: btn.dataset.duration,
      class: btn.dataset.class,
      price: Number(btn.dataset.price),
      stops: 0,
    };
    console.log(selectedFlight);
    // حفظ الرحلة فوراً والتوجيه على checkout.html
    localStorage.setItem("selectedFlight", JSON.stringify(selectedFlight));
    window.location.href = "checkout.html";
  });
});
