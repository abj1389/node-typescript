// Number
var numeroEntero = 10;
var numeroDecimal = 2.5;
var numeroNegativo = -10;
var miVariable = 99;
// Typescript infiere los tipos (deduce)
// miVariable = "No puedo hacer esto";
// String
var miTexto = "Hola amigos!";
var miTextoDos = 'Hola amigos!';
var miTextoTres = "Hola amigos ".concat(numeroEntero, " !");
// Boolean
var isSunday = false;
var isFriday = true;
// Undefined
// Valores no definidos -> Solo ponemos tipo y definimos depués
var miValor;
// miValor -> undefined
miValor = "Ya tengo valor";
// miValor -> string (Ya tengo valor)
// ANY
// Ejemplo de any -> Mala práctica
var pruebaAny = 123;
pruebaAny = "Ahora tiene un string";
pruebaAny = true;
// Objetos
var address = {
    street: "Calle falsa",
    number: 123,
    isOpen: true
};
// Array
var coches = ["Audi", "BMW", "MINI"];
console.log(coches[0]);
console.log(coches[1]);
var notas = [7, 4, 10, 3];
// Otra forma de definir arrays, menos común
// const ciudades: Array<string> = ["Madrid", "Valencia", "Barcelona"];
