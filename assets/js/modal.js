// Get the modal
var modal01 = document.getElementById("myModal01");
var modal02 = document.getElementById("myModal02");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("myImg01");
var img02 = document.getElementById("myImg02");

var modalImg01 = document.getElementById("img01");
var modalImg02 = document.getElementById("img02");

var captionText01 = document.getElementById("caption01");
var captionText02 = document.getElementById("caption02");

// For first img
img01.onclick = function () {
  modal01.style.display = "block";
  modalImg01.src = this.src;
  captionText01.innerHTML = this.alt;
};

// For second img
img02.onclick = function () {
  modal02.style.display = "block";
  modalImg02.src = this.src;
  captionText02.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close01")[0];
var span02 = document.getElementsByClassName("close02")[0];

// When the user clicks on <span> (x), close the modal
span01.onclick = function () {
  modal01.style.display = "none";
};
span02.onclick = function () {
  modal02.style.display = "none";
};
