function Producto(nombre, precio) {
    
    this.nombre = nombre;
    this.precio = precio;

    this.mostrarInfo = function() {
        return this.nombre + " cuesta $" + this.precio;
    };
}

// Crear tres productos:
const producto1 = new Producto("Perfume", 1200);
const producto2 = new Producto("Caja de sombras", 180);
const producto3 = new Producto("Base de maquillaje", 250);

// Después:
console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
console.log(producto3.mostrarInfo());