const contact = {
    "forename": "Ash",
    "surname": "Springs",
    "fullName": function() {
        return "Ash Springs"
    }
}

let ashSpringsFullName =contact.fullName()

//console.log(ashSpringsFullName) 

function funcionamientoMath(){

//const numberRandom = Math.random();
console.info(numberRandom);
console.log(Math.PI);
console.log(Math.random());
}
functionStrings();
function functionStrings(){
    let nombre= "anita";
    console.info(nombre.toUpperCase());
    for(let i=0; i<=nombre.length; i++){
        console.log(nombre.charAt(i));
    }
    console.info(nombre.substring(0,nombre.length));

    let numero2=2343;
    console.info(numero2.toString())
}

 contact = {
    "forename": "Ash", 
    "surname": "Springs",
    "fullName": function () {
        return this.forename + " " + this.surname;
    }
};
