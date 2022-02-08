let elSlider = document.querySelector(".slider");
let elActive = document.querySelector(".active");
let elLineOne = document.querySelector(".line1");
let elLineTwo = document.querySelector(".line2");
let elLineThree = document.querySelector(".line3");
let elLineFour = document.querySelector(".line4");

elLineOne.addEventListener("click", function () {
     elSlider.style.transform = "translateX(0)";
     elActive.style.top = "0";
});

elLineTwo.addEventListener("click", function () {
     elSlider.style.transform = "translateX(-25%)";
     elActive.style.top = "80px";
});

elLineThree.addEventListener("click", function () {
     elSlider.style.transform = "translateX(-50%)";
     elActive.style.top = "160px";
});

elLineFour.addEventListener("click", function () {
     elSlider.style.transform = "translateX(-75%)";
     elActive.style.top = "240px";
});