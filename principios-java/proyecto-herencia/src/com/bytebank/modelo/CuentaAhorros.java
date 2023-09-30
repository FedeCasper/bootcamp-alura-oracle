package com.bytebank.modelo;

import com.bytebank.modelo.Cuenta;

public class CuentaAhorros extends Cuenta {

    public CuentaAhorros(int agencia, int numero) {
        super(agencia, numero);
    }

    @Override
    public void depositar(double deposito) {
        this.saldo = this.saldo + deposito;
    }

}
