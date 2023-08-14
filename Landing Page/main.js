// To open sideNavBar
function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}

function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}

function shrinkNavbar() {
  document.querySelector("nav").classList.add("shrink");
}

function restoreNavbar() {
  document.querySelector("nav").classList.remove("shrink");
}

function checkScroll() {
  if (window.scrollY > 80) {
    shrinkNavbar();
  } else {
    restoreNavbar();
  }
}

window.addEventListener("scroll", function () {
  requestAnimationFrame(checkScroll);
});

function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}

function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}



