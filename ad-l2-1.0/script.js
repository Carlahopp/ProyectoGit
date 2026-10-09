// Función color rojo
function volverRojo() {
  document.getElementById("titular-burger").style.color = "red";
}

// Función extra: Cambiar todos los Burger Town! a azul
function cambiarTodosAzul() {
  let titulos = document.getElementsByClassName("titulo-burger-town");
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.color = "#0056b3";
  }
}