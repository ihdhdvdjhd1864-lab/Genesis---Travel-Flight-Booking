let selectedFlightData = JSON.parse(localStorage.getItem("selectedFlight"));
let arrDate = JSON.parse(localStorage.getItem("arrDate"));
if (!selectedFlightData) {
  alert("لم يتم اختيار رحلة! جاري تحويلك لصفحة البحث...");
  window.location.href = "results.html";
}

let summaryAirline = document.getElementById("summaryAirline");
let summaryFrom = document.getElementById("summaryFrom");
let summaryTo = document.getElementById("summaryTo");
let summaryTime = document.getElementById("summaryTime");
let summaryClass = document.getElementById("summaryClass");
let summaryPrice = document.getElementById("summaryPrice");
let summaryPassengers = document.getElementById("summaryPassengers");
let checkoutForm = document.getElementById("checkoutForm");
let ticketId = document.getElementById("ticketId");
ticketId.textContent = arrDate.travelersCount;

// دالة عرض بيانات الرحلة في ملخص التذكرة
function displayFlightSummary(flight) {
  summaryAirline.textContent = flight.airline;
  summaryFrom.textContent = flight.from;
  summaryTo.textContent = flight.to;
  summaryTime.textContent = flight.departureTime;
  summaryClass.textContent = flight.class;
  summaryPassengers.textContent = arrDate.travelersCount;
  summaryPrice.textContent = `$${flight.price}`;
  console.log(flight);
}
displayFlightSummary(selectedFlightData);

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1. تجميع بيانات المسافر
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const passengerDetails = {
    firstName: firstName,
    lastName: lastName,
    email: document.getElementById("email").value,
    passport: document.getElementById("passport").value,
    phone: document.getElementById("phone").value,
    bookingDate: new Date().toLocaleDateString(),
    bookingRef: "GEN-" + Math.floor(100000 + Math.random() * 900000),
  };

  // 2. تحديث نص الرسالة باسمك
  const toastText = document.querySelector("#bookingToast .toast-text p");
  if (toastText) {
    toastText.textContent = `Welcome aboard, ${passengerDetails.firstName}! Generating your boarding pass...`;
  }

  const bookingToast = document.getElementById("bookingToast");
  bookingToast.classList.add("show");

  // 4. تأخير لمدة 2.5 ثانية (زمن شريط التحميل) وبعدها نطلع التذكرة
  setTimeout(() => {
    // إخفاء الـ Toast
    bookingToast.classList.remove("show");
    // تعبئة بيانات التذكرة
    document.getElementById("ticketPassengerName").textContent =
      `${passengerDetails.firstName} ${passengerDetails.lastName}`;
    document.getElementById("ticketRef").textContent =
      passengerDetails.bookingRef;

    if (document.getElementById("ticketId")) {
      document.getElementById("ticketId").textContent = Math.floor(
        1000 + Math.random() * 9000,
      );
    }

    document.getElementById("ticketFrom").textContent = selectedFlightData.from;
    document.getElementById("ticketTo").textContent = selectedFlightData.to;
    document.getElementById("ticketAirline").textContent =
      selectedFlightData.airline;
    document.getElementById("ticketTime").textContent =
      selectedFlightData.departureTime;
    document.getElementById("ticketClass").textContent =
      selectedFlightData.class;

    // توليد الباركود الحقيقي بـ JsBarcode لو المكتبة متحملة
    if (typeof JsBarcode !== "undefined") {
      JsBarcode("#barcode", passengerDetails.bookingRef, {
        format: "CODE128",
        lineColor: "#000",
        background: "#ffffff",
        width: 2,
        height: 40,
        displayValue: true,
        fontSize: 12,
      });
    }

    // إخفاء الفورم وإظهار كارت التذكرة
    checkoutForm.style.display = "none";
    document.getElementById("ticketContainer").style.display = "block";

    // حفظ الحجز
    localStorage.setItem(
      "latestBooking",
      JSON.stringify({ ...passengerDetails, flight: selectedFlightData }),
    );
    localStorage.removeItem("selectedFlight");
  }, 2500);
});
للمستخدم;
