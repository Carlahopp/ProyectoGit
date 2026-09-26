import promptSync from "prompt-sync";
const prompt = promptSync();

export function FriendsList() {
  this.list = [];
}

const myFriends = new FriendsList();

if (process.argv.length > 3) {
  myFriends.list = process.argv.slice(4);
} else {
  const count = parseInt(prompt("How many friends? ") || "0"); 
  for (let i = 0; i < count; i++) {
    const name = prompt("");
    if (name) myFriends.list.push(name);
  }
}

console.log(myFriends.list);