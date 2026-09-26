export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level += 1;
  }
}

class Party {
  constructor(partyName) {
    this.partyName = partyName;
    this.members = [];
  }

  addMember(playerInstance) {
    this.members.push(playerInstance);
    console.log(`${playerInstance.name} joined the party!`);
  }

  removeMember(playerName) {
    this.members = this.members.filter(player => player.name !== playerName);
    console.log(`${playerName} left the party!`);
  }
}