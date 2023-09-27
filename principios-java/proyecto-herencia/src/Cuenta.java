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

    public abstract void depositar(double deposito);

    public void saca(double valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    public void transfiere(double monto, Cuenta cuentaDestino){
        if(this.saldo >= monto){
            this.saca(monto);
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
