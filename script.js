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

const counterButtons = document.querySelectorAll(".counter-btn");
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
