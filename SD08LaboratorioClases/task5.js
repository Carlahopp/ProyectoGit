export class Player {
    constructor(name, level){
      this.name = name;
      this.level = level;
      this.xp = 0;
      this.xpNeeded = 100;
    }
  
    info() {
      return`${this.name} has reached level ${this.level}!`;
    }

    levelUp() {
      this.level += 1;
      this.info();
    }

    gainXP(amount) {
      this.xp += amount;
      console.log(`${this.name} ha ganado ${amount} XP.`);

      while (this.xp >= this.xpNeeded) {
        this.xp -= this.xpNeeded;
        this.levelUp();
      }
    }
  }