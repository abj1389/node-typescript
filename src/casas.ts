class Persona {
  public nombre: string;
  public dineroDisponible: number;

  constructor (nombre: string, dineroDisponible: number) {
    this.nombre = nombre;
    this.dineroDisponible = dineroDisponible;
  }

  public getInfo(): void {
    console.log(`Nombre: ${this.nombre} / Dinero disponible: ${this.dineroDisponible}`);
  }
}

enum TipoCasa {
  CHALET = "CHALET",
  PISO = "PISO",
}

class Casa {
  public precio: number;
  public tipoCasa: TipoCasa;

  constructor (precio: number, tipoCasa: TipoCasa) {
    this.precio = precio;
    this.tipoCasa = tipoCasa;
  }

  public comprar(compradores: Persona[]): void {
    let totalDisponible: number = 0;
    // eslint-disable-next-line no-return-assign
    compradores.forEach((comprador) => totalDisponible = totalDisponible + comprador.dineroDisponible);

    if (totalDisponible >= this.precio) {
      // eslint-disable-next-line no-return-assign
      compradores.forEach((comprador) => comprador.dineroDisponible = comprador.dineroDisponible - (this.precio / compradores.length));
      console.log("Casa comprada!");
    } else {
      console.log("ERROR: Los compradores no tienen dinero suficiente para adquirir esta casa.");
    }
  }
}

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
