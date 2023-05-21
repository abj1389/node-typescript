# VIDEO 05 - Ejercicio cuentas y casas

En este ejercicio debes realizar dos ficheros de typescript:

- cuentas.ts
- casas.ts

En el fichero cuentas.ts deberás crear una clase llamada "Cuenta" que representa una cuenta bancaria. La clase Cuenta tendrá las siguientes propiedades y métodos:

- Propiedad privada "titular" de tipo string, que representa el titular de la cuenta.
- Propiedad privada "cantidad" de tipo number, que representa la cantidad de dinero en la cuenta.
- Constructor que recibe como parámetros el titular y la cantidad inicial de la cuenta. La cantidad inicial es opcional y si no se proporciona, se establecerá en 0.
- Método público "ingresar(cantidadIngresar: number)" que recibe una cantidad y la suma a la cantidad actual de la cuenta. Si la cantidad ingresada es negativa, se imprime por consola el mensaje de error "ERROR: La cantidad introducida es negativa".
- Método público "retirar(cantidadRetirar: number)" que recibe una cantidad y la resta a la cantidad actual de la cuenta. Si la cantidad a retirar supera la cantidad actual de la cuenta, se imprime por consola el mensaje de error "ERROR: No tienes dinero suficiente para retirar esa cantidad".
- Método público "mostrar()" que imprime por consola los datos de la cuenta en el siguiente formato:
  - "--------------------------"
  - "Datos de la cuenta:"
  - "Titular: [titular]"
  - "Cantidad: [cantidad]"
  - "--------------------------"

Para probarlo puedes ejecutar este código:

```tsx
const cuenta1: Cuenta = new Cuenta("Pedro", 2000);
const cuenta2: Cuenta = new Cuenta("Juan");

// Las cuentas se inician con los valores del constructor
cuenta1.mostrar();
cuenta2.mostrar();

// Ingresamos 300€ a la cuenta 1
cuenta1.ingresar(300);
cuenta1.mostrar();

// Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
cuenta2.ingresar(-200);
cuenta2.mostrar();

// Retiramos 500€ de la cuenta 1 y la vemos tras la operación
cuenta1.retirar(500);
cuenta1.mostrar();

// Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
cuenta1.retirar(4000);
cuenta1.mostrar();
```

Que deberá imprimir:

![Untitled](/docs/assets/Untitled.png)

En el fichero casas.ts deberás crear una clase llamada "Persona" y una clase llamada "Casa". La clase Persona tendrá las siguientes propiedades y métodos:

- Propiedad pública "nombre" de tipo string, que representa el nombre de la persona.
- Propiedad pública "dineroDisponible" de tipo number, que representa la cantidad de dinero disponible de la persona.
- Constructor que recibe como parámetros el nombre y el dinero disponible y asigna esos valores a las propiedades correspondientes.
- Método público "getInfo()" que imprime por consola el nombre y el dinero disponible de la persona en el siguiente formato: "Nombre: [nombre] / Dinero disponible: [dineroDisponible]".

Además, deberás utilizar un enumerado llamado "TipoCasa" con dos opciones: "CHALET" y "PISO".

La clase Casa tendrá las siguientes propiedades y métodos:

- Propiedad pública "precio" de tipo number, que representa el precio de la casa.
- Propiedad pública "tipo" de tipo TipoCasa, que representa el tipo de la casa.
- Constructor que recibe como parámetros el precio y el tipo de la casa y asigna esos valores a las propiedades correspondientes.
- Método público "comprar(compradores: Persona[])" que recibe un array de objetos Persona que representan a los compradores interesados en adquirir la casa. Este método realiza las siguientes acciones:
  - Calcula la suma del dinero disponible de todos los compradores.
  - Si el dinero total es mayor o igual al precio de la casa, se realiza la compra de la casa de la siguiente manera:
    - Se descuenta el precio de la casa dividido entre la cantidad de compradores del dinero disponible de cada comprador.
    - Imprime por consola el mensaje "Casa comprada!".
  - Si el dinero total es menor al precio de la casa, se imprime por consola el mensaje de error "ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa."

Para probarlo puedes ejecutar este código:

```tsx
const juan: Persona = new Persona("Juan", 100000);
const maria: Persona = new Persona("María", 120000);
const paula: Persona = new Persona("Paula", 30000);
const chalet1: Casa = new Casa(80000, TipoCasa.CHALET);
const piso1: Casa = new Casa(60000, TipoCasa.PISO);

// Situación de cada uno antes de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();

// Transaccioens
chalet1.comprar([juan, maria]); // Debería comprar el chalet
piso1.comprar([paula]); // Debería fallar, no tiene dinero suficiente

// Situación de cada uno después de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();
```

Que debe imprimir:

![Untitled](/docs/assets/Untitled%201.png)

Recuerda que puedes encontrar en este repositorio todo el código que hemos visto durante la sesión:

<https://github.com/The-Valley-School/node-s11-typescript>
