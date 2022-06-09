
// funcion sin necesidad de pasar tipados de variables
function sum(a, b) {
  return a + b;
}

const result = sum('Karen', 'Gomez');
console.log(result);

function sum1(a, b) {
  return a + b;
}

const result1 = sum('Karen', 'Gomez');
console.log(result);

// Funcion con tipados asignados

function sumInt(a: number, b: number): number {
  return a + b;
}
const result2 = sumInt(10, 20);
console.log(result2);

// Funcion de  con flecha
const sumArrrow = (a: number, b: number): number => {
  return a + b;
};

function multiplier(
  number: number,
  otherNumber?: number,
  base: number = 2
): number {
  return number * base;
}

const result3 = multiplier(5, 0, 10);
console.log(result3);

//  Funciones con interfaces

interface PersonageLOR {
  name: string;
  pl: number;
  showLive: () => void;
}

function cure(personage: PersonageLOR, cureX: number): void {
  personage.pl += cureX;
}

const newPersonage: PersonageLOR = {
  name: 'Goku',
  pl: 50,
  showLive() {
    console.log('Points Live:', this.pl);
  },
};
cure(newPersonage, 20);
newPersonage.showLive();
