export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.inventory = {};
  }

  // Métodos obligatorios requeridos por index.js
  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level += 1;
  }
    
  addItem(itemName, quantity = 1) {
    if (this.inventory[itemName]) {
        this.inventory[itemName] += quantity;
    } else {
        this.inventory[itemName] = quantity;
    }
    console.log(`Added ${quantity}x ${itemName}`);
  }
    
  removeItem(itemName, quantity = 1) {
    if (!this.inventory[itemName]) return;
    this.inventory[itemName] -= quantity;

    if (this.inventory[itemName] <= 0) {
      delete this.inventory[itemName];
    }
    console.log(`Removed ${quantity}x ${itemName}`);
  }
}