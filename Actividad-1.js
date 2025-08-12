function CuentaBancaria(titular, saldoIniciar) {
  this.titular = titular;
  this.saldo = saldoIniciar;
}

CuentaBancaria.prototype.depositar = function (monto) {
  this.saldo += monto;
  console.log(`Deposito de ${monto} exitoso. Saldo actual: ${this.saldo}`);
};

CuentaBancaria.prototype.extraer = function (monto) {
  if (monto <= this.saldo) {
    this.saldo -= monto;
    console.log(`Extracción de ${monto} exitosa. Saldo actual: ${this.saldo}`);
  } else {
    console.log("Fondos insuficiente.");
  }
};

CuentaBancaria.prototype.consultarSaldo = function () {
  console.log(`Saldo actual: ${this.saldo}`);
};

const cuentaPropia = new CuentaBancaria("Mauricio Heredia", 10000);

cuentaPropia.depositar(5000);
cuentaPropia.extraer(2000);
cuentaPropia.consultarSaldo();
