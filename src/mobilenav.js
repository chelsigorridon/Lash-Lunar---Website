/**
 * Initialises and manages the mobile navigation drawer.
 * 
 * This function handles opening and closing the mobile menu overlay by
 * toggling Tailwind CSS display classes (flex/hidden) based on user interactions.
 * It also ensures the menu closes automatically when a navigation link is clicked.
 * 
 * @function mobileNav
 * @returns {void} Returns early if any required DOM elements are missing.
 */

export function mobileNav() {
     /** @type {HTMLElement | null} The button/icon used to open the menu */
  const menuBtn = document.getElementById("nav-Btn");

   /** @type {HTMLElement | null} The container/overlay for the mobile links */
  const navLinks = document.getElementById("mobile-menu");

   /** @type {HTMLElement | null} The button inside the menu used to close it */
  const closeBtn = document.getElementById("close-menu");

   /** @type {NodeListOf<HTMLAnchorElement>} All anchor links within the mobile menu */
  const allLinks = navLinks.querySelectorAll("a");

  // Safety check: Exit if the necessary elements are not found in the DOM
  if (!menuBtn || !navLinks || !closeBtn) return; // safe check


  
  /**
   * Toggles the visibility of the mobile menu and the menu icon.
   * 
   * @param {boolean} isOpen - Set to true to show the menu, false to hide it.
   */

  const toggleMenu = (isOpen) => {
    if (isOpen) {
      navLinks.classList.remove("hidden");
      navLinks.classList.add("flex");
      closeBtn.classList.remove("hidden");
      menuBtn.classList.add("hidden");
    } else {
      navLinks.classList.add("hidden");
      navLinks.classList.remove("flex");
       menuBtn.classList.remove("hidden");
    }
};

   // Event listener to open the menu when the burger icon is clicked
  menuBtn.addEventListener("click", () => toggleMenu(true)); 
   
  
  // Event listener to close the menu when the 'X' button is clicked
  closeBtn.addEventListener("click", () => toggleMenu (false));  
   
      // Loop through all links to ensure the menu closes after a selection is made
 allLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });
} 

/*Think of this code as a traffic controller for your menu. It works by toggling CSS classes based on user actions (clicks).
Here is the breakdown:
1. The "Finders" (Variables)
javascript
const menuBtn = document.getElementById("nav-Btn");
const navLinks = document.getElementById("mobile-menu");
// ... etc
Use code with caution.

The code first looks through your HTML to find the specific elements it needs to control. The !menuBtn || !navLinks... line is a safety check—it prevents the code from crashing if you accidentally forget to add an ID in your HTML.
2. The "Switcher" (The toggleMenu function)
Instead of writing the same code over and over, this function handles the heavy lifting:
When isOpen is true: It hides the "hamburger" icon and shows the menu by swapping the Tailwind hidden class for flex.
When isOpen is false: It does the opposite, hiding the menu and bringing back the "hamburger" icon.
3. The "Listeners" (Event Handling)
This is where the interaction happens. The code "listens" for a click and then tells the Switcher what to do:
menuBtn.addEventListener: Listens for a click on the menu icon 
 calls toggleMenu(true).
closeBtn.addEventListener: Listens for a click on the 'X' 
 calls toggleMenu(false).
4. The "Auto-Close" Logic
javascript
allLinks.forEach(link => {
  link.addEventListener("click", () => toggleMenu(false));
});
Use code with caution.

This is the smartest part. Since you have multiple links (Home, About, etc.), the code loops through every single <a> tag inside your menu. It tells each one: "If you get clicked, run the toggle function to close the menu."
Why it works:
It relies on Tailwind's utility classes. Because hidden has display: none !important, adding or removing that single class name is enough to make the entire menu appear or disappear instantly without needing complex animation logic.

  */