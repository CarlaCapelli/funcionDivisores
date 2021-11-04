let numero = Number(prompt("ingrese un numero"));

function esMultiplo(numero: number, divisor: number): boolean {
  return numero % divisor === 0;
}

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

let numDivisores: number = cantidadDeDivisores(numero);
console.log("el numero", numero, " tiene ", numDivisores, " divisores");
