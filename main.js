let menu = document.querySelector(".menu");
let close = document.getElementById("close");
let menuSide = document.querySelector(".parent-side-menu");

menu.onclick = function () {
  menuSide.style.display = "block";
};
close.onclick = function () {
  menuSide.style.display = "none";
};

 menuSide.onclick = function(){
  menuSide.style.display="none";
 }

