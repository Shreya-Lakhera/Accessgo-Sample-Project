const contrastToggle = document.getElementById("contrast-toggle");
const bookingForm = document.getElementById("booking-form");
const bookingStatus = document.getElementById("booking-status");

contrastToggle.addEventListener("click", () => {
  const enabled = document.body.classList.toggle("high-contrast");
  contrastToggle.setAttribute("aria-pressed", String(enabled));
  contrastToggle.textContent = enabled ? "Disable high contrast" : "Enable high contrast";
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  bookingStatus.textContent = "Booking request submitted. We will contact you shortly.";
  bookingForm.reset();
});
