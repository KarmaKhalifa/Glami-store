let menu = document.querySelector(".menu");
let close = document.getElementById("close");
let parentMenuSide = document.querySelector(".parent-side-menu");
let menuSide = document.querySelector(".side-menu");

// Open Menu
menu.onclick = function () {
  parentMenuSide.style.opacity = "1";
  parentMenuSide.style.visibility = "visible";
  menuSide.style.width = "250px";
};

// Close Menu
close.onclick = function () {
  parentMenuSide.style.opacity = "0";
  parentMenuSide.style.visibility = "hidden";
  menuSide.style.width = "0px";
};

// Close menu when clicking outside the side menu
parentMenuSide.onclick = function (e) {
  if (e.target === parentMenuSide) {
    parentMenuSide.style.opacity = "0";
    parentMenuSide.style.visibility = "hidden";
    menuSide.style.width = "0px";
  }
};
