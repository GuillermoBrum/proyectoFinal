
function myFunction() {
    let element = document.body;
    element.classList.toggle("nightmode");
 }

 function topNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }