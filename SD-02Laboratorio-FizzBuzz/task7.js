let salida = [];
let primos = [3, 5, 7, 11, 13, 17];
let buzzWords = ["Fizz", "Buzz", "Woof", "Chic", "Glam", "Kachow"];

for(let i=1; i<=60; i++){
  let palabra = "";

  for(let p=0; p<primos.length; p++){
    if(i % primos[p] == 0){
      palabra += buzzWords[p];
    }
  }

  if(palabra == "") salida.push(i);
  else salida.push(i + " " + palabra);
}

console.log(salida.join("\n"));