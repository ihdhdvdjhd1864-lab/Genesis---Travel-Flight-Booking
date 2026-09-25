// Get Search Data
let searchData = JSON.parse(localStorage.getItem("arrDate"));

let flightsContainer = document.querySelector("#flightsContainer");
let resultsCount = document.querySelector("#resultsCount");
let noResults = document.querySelector("#noResults");

// Search Information
if (searchData) {
  document.querySelector("#fromResult").textContent = searchData.fromSelect;
  document.querySelector("#toResult").textContent = searchData.toSelect;
  document.querySelector("#dateResult").textContent = searchData.DepartDate;

  document.querySelector("#travelersResult").textContent =
    `${searchData.travelersCount} Passenger`;
  document.querySelector("#classResult").textContent = searchData.classSelect;
}

// Display Flights
function displayFlights(results) {
  flightsContainer.innerHTML = "";
  resultsCount.textContent = results.length;
  if (results.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  results.forEach((flight) => {
    let card = document.createElement("div");
    card.className = "flight-card";
    let stops = flight.stops === 0 ? "Non-stop" : `${flight.stops} Stop`;
    card.innerHTML = `
      <div class="airline">
        <strong>
          ${flight.airline}
        </strong>

        <span>
          ${flight.flightNumber}
        </span>
      </div>

      <div class="flight-route">

        <div class="time">
          <strong>
            ${flight.departureTime}
          </strong>

          <span>
            ${flight.from}
          </span>
        </div>

        <div class="duration">

          <span>
            ${flight.duration}
          </span>

          <div class="line"></div>

          <small>
            ${stops}
          </small>

        </div>

        <div class="time">

          <strong>
            ${flight.arrivalTime}
          </strong>

          <span>
            ${flight.to}
          </span>

        </div>

      </div>

      <div class="price">

        <span>
          ${flight.class}
        </span>

        <strong>
          $${flight.price}
        </strong>

        <button
          class="select-flight"
          data-id="${flight.id}"
        >
          Select
        </button>

      </div>
    `;

    flightsContainer.appendChild(card);
  });
}

// Get Flights
async function getFlights() {
  try {
    let response = await fetch("./dade.json");
    let data = await response.json();
    let results = data.filter((flight) => {
      return (
        flight.from === searchData.fromSelect &&
        flight.to === searchData.toSelect &&
        flight.departDate === searchData.DepartDate &&
        flight.class === searchData.classSelect
      );
    });
    displayFlights(results);
  } catch (error) {
    console.log("Error:", error);
  }
}

getFlights();
