package com.bytebank.modelo;

public abstract class Cuenta {

    protected double saldo;
    private int agencia;
    private int numero;
    private Cliente titular = new Cliente();

    private static int total;

    public Cuenta(int agencia, int numero) {
        this.agencia = agencia;
        this.numero = numero;
        Cuenta.total++;
    }

    /**
     * Este método es un método abstracto que ingresa dinero al saldo de una cuenta
     * @param deposito
     */
    public abstract void depositar(double deposito);

    public void saca(double valor) throws SaldoInsuficienteException {
        if(this.saldo < valor){
            throw new SaldoInsuficienteException("No tienes saldo");
        }
            this.saldo -= valor;
    }

    public void transfiere(double monto, Cuenta cuentaDestino){
        if(this.saldo >= monto){
            try {
                this.saca(monto);
            } catch (SaldoInsuficienteException e) {
                throw new RuntimeException(e);
            }
            cuentaDestino.depositar(monto);
        }

    }

    public double getSaldo() {return saldo;}
    public void setSaldo(double saldo) {this.saldo = saldo;}

    public int getAgencia() {return agencia;}
    public void setAgencia(int agencia) {this.agencia = agencia;}

    public int getNumero() {return numero;}
    public void setNumero(int numero) {this.numero = numero;}

    public Cliente getTitular() {return titular;}
    public void setTitular(Cliente titular) {this.titular = titular;}
}
