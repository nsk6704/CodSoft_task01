// main.js

// Function to open the side navigation bar
function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}

// Function to close the side navigation bar
function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}

// Function to handle the scrolling effect on the navbar
// Add a new CSS class for the shrunk navbar
function shrinkNavbar() {
  document.querySelector("nav").classList.add("shrink");
}

// Remove the CSS class to restore the original navbar size
function restoreNavbar() {
  document.querySelector("nav").classList.remove("shrink");
}

// Check the scroll position and apply the shrinking effect
function checkScroll() {
  if (window.scrollY > 80) {
    shrinkNavbar();
  } else {
    restoreNavbar();
  }
}

// Listen for the scroll event and call the checkScroll function
window.addEventListener("scroll", function () {
  requestAnimationFrame(checkScroll);
});

// Function to open the side navbar
function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}

// Function to close the side navbar
function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}

// ... Other JavaScript code (if any)

