
export function initServicesDropdown() {
  const toggleBtn = document.getElementById("toggle-services");
  const services = document.getElementById("services-container");
  const arrow = document.getElementById("arrow");

  if (!toggleBtn || !services || !arrow) return; // safe check

  toggleBtn.addEventListener("click", () => {
    services.classList.toggle("hidden");      // show/hide the container
    arrow.classList.toggle("rotate-180");     // rotates the arrow
  });
}

// Booking toggle
  const toggleBooking = document.getElementById("toggle-booking");
  const bookingContainer = document.getElementById("booking-container");
  const arrowBooking = document.getElementById("arrow-booking");

  toggleBooking?.addEventListener("click", () => {
    bookingContainer.classList.toggle("hidden");
    arrowBooking.classList.toggle("rotate-180");
  });

  export function initGiftDropdown() {
  const toggleGift = document.getElementById("toggle-gift");
  const giftContainer = document.getElementById("gift-container");
  const arrowGift = document.getElementById("arrow-gift");
 
  if (!toggleGift || !giftContainer || !arrowGift) return;
 
  toggleGift.addEventListener("click", () => {
    giftContainer.classList.toggle("hidden");
    arrowGift.classList.toggle("rotate-90");
  });
}