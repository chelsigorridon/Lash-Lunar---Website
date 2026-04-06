export function mobileNav() {
  const menuBtn = document.getElementById("nav-Btn");
  const navLinks = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu");
  const allLinks = navLinks.querySelectorAll("a");

  if (!menuBtn || !navLinks || !closeBtn) return; // safe check

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

  // Open on burger click
  menuBtn.addEventListener("click", () => toggleMenu(true)); 
   
  
  // Close Logic
  closeBtn.addEventListener("click", () => toggleMenu (false));  
   
    // CLOSE WHEN A LINK IS CLICKED
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