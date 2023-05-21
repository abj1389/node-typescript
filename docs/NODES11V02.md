# VIDEO 02 - Interfaces, clases e implements

En TypeScript, las interfaces y las clases son constructores fundamentales para definir estructuras y comportamientos en el código. Aquí tienes una descripción de cada uno:

**Interfaces**: En TypeScript, las interfaces son utilizadas para definir la forma de un objeto, es decir, la estructura de sus propiedades y métodos, sin proporcionar una implementación concreta. Son útiles para establecer un contrato o una especificación que los objetos deben seguir. Las interfaces permiten establecer reglas para los tipos de datos y aseguran que un objeto cumpla con ciertos requisitos. Pueden contener propiedades opcionales, propiedades de solo lectura y métodos. Por ejemplo, puedes definir una interfaz "Persona" con propiedades como "nombre" y "edad", y luego asegurarte de que los objetos que implementen esta interfaz tengan esas propiedades y cumplan con su estructura.

```tsx
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}

class Estudiante implements Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}
```

**Clases**: Las clases en TypeScript son utilizadas para crear objetos concretos que pueden tener propiedades y métodos. Las clases permiten definir una plantilla o un modelo a partir del cual se pueden crear múltiples instancias de objetos con características similares. Las clases también pueden heredar propiedades y comportamientos de otras clases mediante la herencia.

Dentro de una clase, puedes declarar propiedades y métodos, así como un constructor para inicializar las propiedades cuando se crea una nueva instancia de la clase.

```tsx
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

const persona1 = new Persona("Juan", 25);
persona1.saludar(); // Salida: "Hola, mi nombre es Juan"
```

En este vídeo hemos visto algunos ejemplos de interfaces y clases en typescript:

```tsx
// Definimos interfaz
interface Address {
  street: string;
  number: number;
  city: string;
}

// Utilizamos
const myAddress: Address = {
  street: "Calle Falsa",
  number: 123,
  city: "Madrid",
};

// Interfaz anidada
interface Person {
  name: string;
  phone: number;
  address: Address;
}

const me: Person = {
  name: "Fran",
  phone: 123123123,
  address: {
    // No siguen el orden de Address -> no pasa nada
    street: "Calle inventada",
    city: "Madrid",
    number: 1,
  },
};

// Clase
class Animal {
  public specie: string;
  public legs: number;
  private habitat: string;

  constructor(specie: string, legs: number, habitat: string) {
    this.specie = specie;
    this.legs = legs;
    this.habitat = habitat;

    console.log("Creado animal!");
  }

  getDescription() {
    console.log(`
      Soy un ${this.specie},
      tengo ${this.legs} patas
      y vivo en ${this.habitat}
    `);
  }
}

const perro = new Animal("Perro", 4, "Mi Casa");
const pez = new Animal("Pez Payaso", 0, "Pecera");
perro.getDescription();
pez.getDescription();

console.log("El perro es de la especie: " + perro.specie);
// Da error acceder a variables privadas, pero nos deja ejecutarlo
// console.log("El perro vive en: " + perro.habitat);

// Clases que cumplen interfaces
interface Automobile {
  wheels: number;
  brand: string;
  model: string;
}

class Car implements Automobile {
  public wheels: number;
  public brand: string;
  public model: string;

  // 4 es valor por defecto
  constructor(brand: string, model: string, wheels: number = 4) {
    this.model = model;
    this.brand = brand;
    this.wheels = wheels;
  }
}

const coche = new Car("Lexus", "CT200");
const limusina = new Car("Mayback", "3000", 6);
console.log("El lexus tiene estas ruedas: " + coche.wheels);
console.log("La limo tiene estas ruedas: " + limusina.wheels);
```
