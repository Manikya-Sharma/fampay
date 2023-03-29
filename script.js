// Navbar scroll
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
};
<<<<<<< HEAD
;-
document.getElementById("getUPI").addEventListener("click", ()=>{
  location.href="./sign-up.html"
=======

document.getElementById("payment").addEventListener("click", ()=>{
  location.href = "./make-payment.html"
})

document.getElementById("getUPI").addEventListener("click", ()=>{
  location.href = "./sign-up.html"
>>>>>>> 5ffe416144402459d9e6583745773be974f49284
})