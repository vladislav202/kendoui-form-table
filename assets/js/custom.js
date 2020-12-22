function showAdvancedSection(){
  var x = document.getElementById("advanced-section");
  x.style.display = "block";
}

function showModal(){

  var modal = document.getElementById("bookingModal");
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function showSlider(){

  var slider = document.getElementById("bookingSlider");
  var colosseum = document.getElementById("colosseum");
  slider.style.display = "block";
  // colosseum.style.display = "none";
  window.onclick = function(event) {
    if (event.target == slider) {
      // colosseum.style.display = "block";
      slider.style.display = "none";
    }
  }
}