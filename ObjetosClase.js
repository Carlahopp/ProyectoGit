//Crear objetos con Class
class Producto {
    constructor(nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        console.log(`Producto: ${this.nombre} | Precio: $${this.precio} | Disponible: ${this.disponible ? 'Sí' : 'No'}`);
    }
}
    const p1 = new Producto ("Botas piel vaqueras", 499, true);
    const p2 = new Producto ("tenis blancos adidas", 1980, true);
    const p3 = new Producto ("sandalias otoño café", 650, false);

    p1.mostrarInfo();
    p2.mostrarInfo();
    p3.mostrarInfo();

    


    