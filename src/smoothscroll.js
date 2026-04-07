
export const initSmoothScroll = () => {
  // Select all anchor links that start with '#'
  const anchorLinks = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
};

/*This code adds smooth scrolling behavior to all anchor links that point to sections within the same page (i.e., links that start with '#'). When a user clicks on one of these links, instead of jumping directly to the target section, the page will scroll smoothly to it.*/
/*initSmoothScroll is an exported function meant to be called once to set up smooth scrolling behavior across the page.
Inside it, three things happen in sequence:

Select all anchor links — document.querySelectorAll('a[href^="#"]') finds every <a> tag whose href starts with #, meaning internal page links like <a href="#contact"> or <a href="#top">.
Attach a click listener to each — For every matching link, an event listener is added that fires when the user clicks it.
Override the default jump behavior — Inside the listener:

e.preventDefault() stops the browser's default behavior, which would be an instant jump to the target.
this.getAttribute('href') gets the link's target (e.g. "#contact"), and document.querySelector(...) finds the matching element on the page.
If that element exists, scrollIntoView({ behavior: 'smooth', block: 'start' }) animates the scroll to bring it into view, aligned to the top of the viewport.



One small quirk worth noting: the result of .forEach() is assigned to anchorLinks, but forEach always returns undefined, so that variable ends up unused. It's harmless, but the const anchorLinks = part is unnecessary.
Typical usage would be calling this once after the DOM is ready*/