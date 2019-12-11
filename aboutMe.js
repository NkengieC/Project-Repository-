function changeImage(imgID){
    let kay = document.getElementById("kay");
    let Images = document.getElementById(imgID);
    
    if (imgID == "kay") {
        kay.src = "images/IMG_7638.jpg";
        document.getElementById(imgID).style.borderColor = "green";
    }

}
function change(imgID){
    let kay = document.getElementById("kay");
    let Images = document.getElementById(imgID);
    
    if (imgID == "kay") {
        kay.src = "images/Kay About me.JPG";
       
        document.getElementById(imgID).style.borderColor = "#ffcc32";
    }


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
