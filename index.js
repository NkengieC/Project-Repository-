var slideIndex = 1;
var count = 1;
showSlides(slideIndex);

function plusSlides(n) {
    var titles = ["Serving Looks","Glitter", "Flawless"]
  showSlides(slideIndex += n);
  document.getElementById("text").innerText = titles[count];
  console.log(count);
  count += 1;
  if(count > 2){
   count = 0;
  }

}

function currentSlide(n) {
  showSlides(slideIndex = n);

}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let p = 320;
let i = 0;
const msgList = [
  "I hope you're enjoying your visit on my site",
  "Check out the creative inspo page ",
  "Read all about me :)",
  "Check out my Blog for updates about my life"
];
function doScroll() {
  let x = document.getElementById("msg");
  x.innerHTML = msgList[i];
  x.style.left = p + "px";
  if (p > 700) {
    p = 320;
    i++;
    if (i == msgList.length) {
      i = 0;
    }
  } else {
    p = p + 1;
  }
  setTimeout("doScroll()", 9);
}