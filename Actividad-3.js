String.prototype.concatenarPalabra = function (palabra) {
  return `${this.toString()} ${palabra}`;
};

const saludo = "hola";
const resultado = saludo.concatenarPalabra("mundo");

console.log(resultado);
console.log(saludo);
