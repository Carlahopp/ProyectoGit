function shopinglist() {
    this.items = {};

    this.addItem = function(itemName, quantity = 1, unitPrice = 0) {
        if (this.items[itemName]) {
            this.items[itemName].qty += quantity;
        } else {
            this.items[itemName] = { qty: quantity, price: unitPrice};
        }
        console-log(`[+] Added to list: ${quantity}x ${itemName} ($${unitPrice}) each)`);
    };

    this.printList = function() {
        console.log("--- Farmacía del Ahorro Shopping List ---");
        let totalAccount = 0;

        for (const item in this.items) {
            const qty = this.items[item].qty;
            const price = this.items[item].price;
            const subtotal =qty * price;
            totalAccount += subtotal;

            console.log(`- ${qty}x ${item} ($${price} c/u) = $${subtotal.toFixed(2)}`)
        }

        console.log("----------------------");
        console.log(`Total to pay: $${totalAccount.toFixed(2)}`);
        console.log("----------------------");
    };
}

const myList = new ShoppingList();

myList.addItem("Paracetamol", 2, 20);
myList.addItem("Loratadina", 1, 35);
myList.addItem("Omeprazol", 4, 60);
myList.addItem("Vitamina C", 3, 40);
myList.addItem("Bloqueador Isdin", 1, 599);
myList.addItem("Loratadina", 1, 35)

myList.printList();


// Type your code above this line!

