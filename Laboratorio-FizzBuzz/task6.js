let salida = [];
for(let i=1; i<=25; i++){
  let palabra = "";
  if(i % 3 == 0) palabra += "Fizz";
  if(i % 5 == 0) palabra += "Buzz";
  if(i % 7 == 0) palabra += "Woof";

  if(palabra == "") salida.push(i);
  else salida.push(i + " " + palabra);
}

console.log(salida.join("\n"));
