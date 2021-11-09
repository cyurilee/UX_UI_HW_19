var navLinks = document.getElementById("navLinks");
function hideMenu(){
    navLinks.style.right ="-100vw";
}
function showMenu(){
    navLinks.style.right ="0";
}

var mybutton = document.getElementById("scrollTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
