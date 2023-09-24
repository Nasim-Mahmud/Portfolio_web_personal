// Get the modal
var modal01 = document.getElementById("myModal01");
var modal02 = document.getElementById("myModal02");
var modal03 = document.getElementById("myModal03");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("myImg01");
var img02 = document.getElementById("myImg02");
var img03 = document.getElementById("myImg03");

var modalImg01 = document.getElementById("img01");
var modalImg02 = document.getElementById("img02");
var modalImg03 = document.getElementById("img03");

var captionText01 = document.getElementById("caption01");
var captionText02 = document.getElementById("caption02");
var captionText03 = document.getElementById("caption03");

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

img03.onclick = function () {
  modal03.style.display = "block";
  modalImg03.src = this.src;
  captionText03.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close01")[0];
var span02 = document.getElementsByClassName("close02")[0];
var span03 = document.getElementsByClassName("close03")[0];

// When the user clicks on <span> (x), close the modal
span01.onclick = function () {
  modal01.style.display = "none";
};
span02.onclick = function () {
  modal02.style.display = "none";
};
span03.onclick = function () {
  modal03.style.display = "none";
};
