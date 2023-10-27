let FullImg = document.getElementById("FullImg");
let This_Img = document.getElementById("fullWidth");

function Image(ImagePath) {
  FullImg.style.display = "flex";
  This_Img.src = ImagePath;
}
function Remove() {
  FullImg.style.display = "none";
}

function ZOOM() {
  This_Img.classList.toggle("Zoom");
}
