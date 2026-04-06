export function mobileNav() {
  const menuBtn = document.getElementById("nav-Btn");
  const navLinks = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu");

  if (!menuBtn || !navLinks || !closeBtn) return; // safe check

  menuBtn.addEventListener("click", () => {
    navLinks.classList.remove("hidden");
    navLinks.classList.add("flex");
    closeBtn.classList.remove("hidden");
    menuBtn.classList.add("hidden");

  });

  // Close Logic
  closeBtn.addEventListener("click", () => {
    navLinks.classList.add("hidden");
    navLinks.classList.remove("flex");
    menuBtn.classList.remove("hidden"); // Show the burger icon again
  });
}