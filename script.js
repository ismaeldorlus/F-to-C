let fah = document.getElementById("fah");

document.getElementById("conv").addEventListener("click", convert);

function convert() {
  let heit = Number((fah.value - 32) * (5 / 9));
  heit = Math.round(heit);

  console.log(heit);

  document.getElementById("spanny").innerHTML = heit;
  fah.value = "";
  document.getElementById("h2").innerHTML =
    "Celcius <img width = '50px' src='img/bettertherm.png' alt='' /> ";
  document.getElementById("conv").style.background = "#26d978";
}
