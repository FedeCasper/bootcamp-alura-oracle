public class CuentaCorriente extends Cuenta{

    public  CuentaCorriente(int agencia, int numero){
        super(agencia, numero);
    }

    @Override
    public void depositar(double deposito) {
        this.saldo = this.saldo + deposito;
    }

    @Override
    public void saca(double valor) {
        double comision = 0.2;
        super.saca(valor + comision);
    }



}
