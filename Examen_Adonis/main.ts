
class Personaje {
  ObtenerNombre(): string {
    return "Personaje";
  }
}


class Goku extends Personaje {
  ObtenerNombre(): string {
    return "Goku";
  }
}

class Vegeta extends Personaje {
  ObtenerNombre(): string {
    return "Vegeta";
  }
}

class Gohan extends Personaje {
  ObtenerNombre(): string {
    return "Gohan";
  }
}

class Trunks extends Personaje {
  ObtenerNombre(): string {
    return "Trunks";
  }
}


class Fusion extends Personaje {
  protected personaje1: Personaje;
  protected personaje2: Personaje;

  constructor(personaje1: Personaje, personaje2: Personaje) {
    super();
    this.personaje1 = personaje1;
    this.personaje2 = personaje2;
  }
}


class Gogeta extends Fusion {
  ObtenerNombre(): string {
    return `${this.personaje1.ObtenerNombre()} + ${this.personaje2.ObtenerNombre()} = Gogeta`;
  }
}


class Gotenks extends Fusion {
  ObtenerNombre(): string {
    return `${this.personaje1.ObtenerNombre()} + ${this.personaje2.ObtenerNombre()} = Gotenks`;
  }
}


function main() {
  const goku = new Goku();
  const vegeta = new Vegeta();
  const gohan = new Gohan();
  const trunks = new Trunks();

  const gogeta = new Gogeta(goku, vegeta);
  const gotenks = new Gotenks(gohan, trunks);

  console.log(gogeta.ObtenerNombre()); 
  console.log(gotenks.ObtenerNombre()); 
}

main();
