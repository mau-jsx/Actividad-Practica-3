class CuentaBancaria {
  titular;
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  get saldo() {
    return this.#saldo;
  }

  set depositar(monto) {
    if (typeof monto !== "number" || monto <= 0) {
      console.log("ERROR: El monto debe ser un número positivo.");
      return;
    }
    this.#saldo += monto;
    console.log(`Depósito de ${monto} exitoso. Saldo actual: ${this.#saldo}`);
  }

  set extraer(monto) {
    if (typeof monto !== "number" || monto <= 0) {
      console.log("ERROR: El monto debe ser un número positivo.");
      return;
    }

    if (monto > this.#saldo) {
      console.log("Fondos insuficientes.");
      return;
    }

    this.#saldo -= monto;
    console.log(`Extracción de ${monto} exitosa. Saldo actual: ${this.#saldo}`);
  }
}
const cuenta = new CuentaBancaria("Mauricio", 10000);

console.log("Saldo actual:", cuenta.saldo);

cuenta.depositar = 500;
cuenta.extraer = 2000;
cuenta.extraer = 1000;
console.log("Saldo final:", cuenta.saldo);
