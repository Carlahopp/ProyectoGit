// 1. Establecemos productos(0,1,2)

let productos = [
  { nombre: "Labial", precio: 150, disponible: true },
  { nombre: "Rimel", precio: 120, disponible: true },
  { nombre: "Base", precio: 200, disponible: false },
  { nombre: "Rubor", precio: 180, disponible: true },
  { nombre: "Delineador", precio: 95, disponible: true },
  { nombre: "Corrector", precio: 135, disponible: true },
  { nombre: "Estuche de 8 sombras", precio: 430, disponible: true},
];



function mostrarProducto(nombre, precio) {
  return nombre + " cuesta $" + precio;
}

console.log(productos[0]); 

console.log(productos[0].precio); 

console.log(mostrarProducto(productos[0], productos[0].precio));