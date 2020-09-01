const colorBtn = document.querySelector(".actionBtn");
const colorNumber = document.querySelector(".number");
const colorHexNumber = document.querySelector(".hex_number");

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let rand1 = Math.floor(Math.random() * 255);
  let rand2 = Math.floor(Math.random() * 255);
  let rand3 = Math.floor(Math.random() * 255);
  let hx1 = rand1.toString(16);
  let hx2 = rand2.toString(16);
  let hx3 = rand3.toString(16);
  this.parentElement.style.background =
    "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  colorNumber.innerText = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  colorHexNumber.innerText = "#"+hx1+hx2+hx3;
}
