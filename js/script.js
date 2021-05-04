function openMenu () {
    const menu =document.querySelector('.menu');

    menu.classList.toggle('open');
}

var coll = document.getElementsByClassName("catego");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
}