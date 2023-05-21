# VIDEO 01 - Intro a Typescript

TypeScript es un lenguaje de programación de código abierto que fue creado por Microsoft y lanzado en 2012. Está diseñado como una extensión de JavaScript, lo que significa que todo el código JavaScript existente es válido en TypeScript.

La principal característica de TypeScript es el sistema de tipos estático. Permite definir tipos de datos para variables, parámetros de funciones, propiedades de objetos y más. Esto proporciona un análisis estático del código, lo que significa que los errores de tipo pueden ser detectados durante la etapa de desarrollo, antes de que se ejecute el código. Esto ayuda a prevenir errores comunes y facilita el mantenimiento del código a medida que crece en tamaño y complejidad.

Además de la verificación de tipos, TypeScript ofrece otras características como clases, interfaces, herencia, módulos, genéricos y decoradores. Estas características permiten escribir código más estructurado y modular, facilitando la reutilización de código y la colaboración en equipos de desarrollo.

TypeScript se compila a JavaScript, lo que significa que el código TypeScript es transformado en código JavaScript válido que puede ser ejecutado en cualquier entorno que admita JavaScript, como navegadores web, servidores y dispositivos móviles.

En resumen, TypeScript es un lenguaje de programación que amplía las capacidades de JavaScript al agregar un sistema de tipos estático y otras características que mejoran la productividad y la calidad del código en aplicaciones JavaScript.

En este video hemos hecho algunos ejemplos de tipos primitivos de Typescript:

```tsx
// Number
let numeroEntero: number = 10;
const numeroDecimal: number = 2.5;
const numeroNegativo: number = -10;

let miVariable = 99;
// Typescript infiere los tipos (deduce)
// miVariable = "No puedo hacer esto";

// String
const miTexto: string = "Hola amigos!";
const miTextoDos: string = "Hola amigos!";
const miTextoTres: string = `Hola amigos ${numeroEntero} !`;

// Boolean
const isSunday: boolean = false;
const isFriday: boolean = true;

// Undefined
// Valores no definidos -> Solo ponemos tipo y definimos depués
let miValor: string;
// miValor -> undefined
miValor = "Ya tengo valor";
// miValor -> string (Ya tengo valor)

// ANY
// Ejemplo de any -> Mala práctica
let pruebaAny: any = 123;
pruebaAny = "Ahora tiene un string";
pruebaAny = true;

// Objetos
const address: object = {
  street: "Calle falsa",
  number: 123,
  isOpen: true,
};

// Array
const coches: string[] = ["Audi", "BMW", "MINI"];
console.log(coches[0]);
console.log(coches[1]);

const notas: number[] = [7, 4, 10, 3];

// Otra forma de definir arrays, menos común
// const ciudades: Array<string> = ["Madrid", "Valencia", "Barcelona"];
```

Recuerda que para transpilar el código de Typescript a Javascript hemos tenido que instalar la librería typescript:

```tsx
npm i typescript --save-dev
```

Y crear un comando en el package.json para transpilar y depués ejecutar el Javascript resultante:

```tsx
"transpile": "tsc index.ts",
"start": "node index.js",
```
