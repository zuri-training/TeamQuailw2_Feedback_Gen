


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


let navBtn = document.querySelector(".mobile-view")
let mmm = document.querySelector(".menu-container")
let cls = document.querySelector(".close")

function mobileMenu() {
  mmm.style.display = "block"
  cls.style. display = "block"
  navBtn.style.display = "none"
}

function closes() {
  mmm.style.display = "none"
  navBtn.style.display = "block" 
}