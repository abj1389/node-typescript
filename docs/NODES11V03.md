# VIDEO 03 - Tipos personalizados y casteo de tipos

En este vídeo hemos visto cómo podemos crear tipos personalizados en typescript haciendo uso de enumerados o del operador |

También hemos visto cómo podemos hacer casting de tipos, esto significa que podemos cambiar entre distintos tipos, de string a número de número a string… haciendo uso del operador as.

El operador "as" en TypeScript se utiliza para realizar una conversión de tipo explícita, también conocida como "type assertion". Con este operador, se le indica al compilador que se confía en que un valor tiene un tipo específico, a pesar de que el análisis de tipo automático de TypeScript no pueda inferirlo correctamente.

El operador "as" se utiliza en la siguiente sintaxis:

```tsx
valor as Tipo;
```

Donde "valor" es el valor que se desea convertir y "Tipo" es el tipo al que se desea convertir.

La conversión de tipo se utiliza cuando el programador sabe más información sobre el tipo de un valor que lo que TypeScript puede inferir automáticamente. Por ejemplo, cuando se trabaja con uniones de tipos, se puede utilizar el operador "as" para indicarle al compilador que se está tratando con un tipo específico dentro de la unión.

Aquí tienes un ejemplo:

```tsx
let variable: string | number;
variable = "123";

// Usando el operador "as" para realizar una conversión de tipo explícita
let longitud: number = (variable as string).length;

console.log(longitud); // Salida: 3
```

Este sería el ejemplo que hemos realizado durante el vídeo:

```tsx
// Tipo custom listado de valores
type Country = "Spain" | "Portugal" | "Germany";
const myCountry: Country = "Spain";

console.log("Mi pais es: " + myCountry);

// Enumerado (mapa de clave/valor)
enum Direction {
  UP = "ARRIBA",
  DOWN = "ABAJO",
  LEFT = "IZQUIERDA",
  RIGHT = "DERECHA",
}

const myDirection: Direction = Direction.LEFT;
console.log("Mi dirección es: " + myDirection);

// Casteo de tipos
const a: number = 10;
let b: string | number = "5"; // any porque cambiará de string a number
let result: any = a + b;
console.log(result); // 105

// Cast de tipos: pasar de un tipo a otro, en este caso string -> number
b = parseInt(b);
result = a + b;
console.log(result); // 15

// Cast de tipos: pasar de un tipo a otro, en este caso number -> string
b = b.toString();
result = a + b;
console.log(result); // 105

// EJEMPLO DE AS
const miCadena: string = "Hola amigos!";
const miNumero: number = miCadena as unknown as number;
console.log(miNumero);
console.log(typeof miNumero);
```
