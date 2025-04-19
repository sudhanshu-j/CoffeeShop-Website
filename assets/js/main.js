/*=============== SHOW MENU ===============*/
// Get references to the elements for the navigation menu, toggle, and close buttons
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
// If the navToggle button exists, add an event listener to toggle the menu visibility
if (navToggle) {
  navToggle.addEventListener("click", () => {
    // When the toggle button is clicked, add the "show-menu" class to the navMenu element, making it visible
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
// If the navClose button exists, add an event listener to close the menu
if (navClose) {
  navClose.addEventListener("click", () => {
    // When the close button is clicked, remove the "show-menu" class to hide the navMenu
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
// Get references to all the navigation links
const navLink = document.querySelectorAll(".nav-link");

// Function to remove the "show-menu" class when a nav link is clicked
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on any nav link, hide the menu by removing the "show-menu" class
  navMenu.classList.remove("show-menu");
};

// Add event listeners to each nav link to execute the linkAction function when clicked
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
// Function to add or remove the background class when scrolling
const scrollHeader = () => {
  const header = document.getElementById("header");
  // If the page has been scrolled more than 50px, add the "scroll-header" class to the header
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

// Add an event listener on the window to call scrollHeader when the page is scrolled
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
// Initialize a new Swiper instance for the popular section (image carousel/slider)
const swiperPopular = new Swiper(".popular-swiper", {
  loop: true, // Enable looping of the slides
  grabCursor: true, // Enable grab cursor (indicates draggable)
  spaceBetween: 32, // Space between the slides
  centeredSlides: "auto", // Center the slides automatically
  slidesPerView: "auto", // Show an auto number of slides based on the container's width
  autoplay: {
    delay: 5000, // Autoplay delay of 5 seconds
    disableOnInteraction: false, // Continue autoplay even after user interaction
    // Optional: you can add additional transition effects for the autoplay here if needed
  },
  breakpoints: {
    1150: {
      spaceBetween: 40, // Increase space between slides for screens wider than 1150px
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
// Function to show the scroll-up button based on scroll position
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // If the page is scrolled more than 350px, show the scroll-up button
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

// Add an event listener to the window to track the scroll position and call scrollUp
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Get references to all the sections with an id attribute
const sections = document.querySelectorAll("section[id]");

// Function to highlight the active link based on the scroll position
const scrollActive = () => {
  const scrollDown = window.scrollY; // Current scroll position

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // Get the height of the section
      sectionTop = current.offsetTop - 58, // Get the top position of the section with an offset
      sectionId = current.getAttribute("id"), // Get the ID of the section
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]" // Find the nav link corresponding to the section ID
      );

    // If the scroll position is within the range of the section, add the active-link class
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

// Add an event listener to the window to track scrolling and call scrollActive
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Initialize the ScrollReveal instance for adding scroll animations
const sr = ScrollReveal({
  origin: "top", // Animation will originate from the top
  distance: "60px", // Distance the element will travel in the animation
  duration: 2000, // Duration of the animation in milliseconds
  delay: 300, // Delay before starting the animation
  reset: true, // Reset the animation every time the element scrolls into view
});

// Home page - scroll reveal animations for various elements
sr.reveal(`.home-shape`, { origin: "bottom" }); // Reveal home-shape from the bottom
sr.reveal(`.home-coffee`, { delay: 1000, distance: "200px", duration: 1500 }); // Reveal home-coffee with delay
sr.reveal(`.home-splash`, { delay: 1600, scale: 0, duration: 1500 }); // Reveal home-splash with scale effect
sr.reveal(`.home-bean-1, .home-bean-2`, {
  delay: 2200,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 }, // Reveal home beans with rotation
});
sr.reveal(`.home-ice-1, .home-ice-2`, {
  delay: 2600,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 }, // Reveal home ice with rotation
});
sr.reveal(`.home-leaf`, {
  delay: 2800,
  scale: 0,
  duration: 1500,
  rotate: { z: 90 }, // Reveal home leaf with rotation
});
sr.reveal(`.home-title`, { delay: 3500 }); // Reveal home-title with delay
sr.reveal(`.home-data, .home-sticker`, { delay: 4000 }); // Reveal home data and sticker with delay

// Popular page - scroll reveal animation for the popular swiper
sr.reveal(`.popular-swiper`);

// About page - scroll reveal animations for about section
sr.reveal(`.about-data`, { origin: "left" }); // Reveal about data from the left
sr.reveal(`.about-images`, { origin: "right" }); // Reveal about images from the right
sr.reveal(`.about-coffee`, { delay: 1000 }); // Reveal about coffee with delay
sr.reveal(`.about-leaf-1, .about-leaf-2`, { delay: 1400, rotate: { z: 90 } }); // Reveal about leaves with delay and rotation

// Products page - scroll reveal animation for product cards
sr.reveal(`.product-card`, { interval: 100 }); // Reveal product cards with interval

// Contact page - scroll reveal animations for contact section
sr.reveal(`.contact-info`, { interval: 100 }); // Reveal contact info with interval
sr.reveal(`.contact-shape`, { delay: 600, scale: 0 }); // Reveal contact shape with delay and scale effect
sr.reveal(`.contact-delivery`, { delay: 1200 }); // Reveal contact delivery with delay

// Footer - scroll reveal animations for footer section
sr.reveal(`.footer-container, .footer-copyright`); // Reveal footer container and copyright
