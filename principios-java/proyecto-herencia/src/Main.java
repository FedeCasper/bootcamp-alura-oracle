public class Main {
    public static void main(String[] args) {

        Funcionario federico = new Contador();
        federico.setNombre("Federico");
        federico.setDocumento("30819324");
        federico.setSalario(6000.00);

        Gerente newGerente = new Gerente();
        //newGerente.setNombre("Lider");
        //newGerente.setDocumento("203081932");
        //newGerente.setSalario(5000.00);
        newGerente.setClave("secreta");
        boolean autenticado = newGerente.iniciarSesion("secreta");

        Funcionario funcionario = new Contador();
        funcionario.setNombre("Senua");
        funcionario.setSalario(2000);

        Gerente gerenteJimena = new Gerente();
        //gerenteJimena.setNombre("Jimena");
        //gerenteJimena.setSalario(10000);

        Contador alexis = new Contador();
        alexis.setSalario(5000.00);

        ControlBonificacion controlBonificacion = new ControlBonificacion();
        controlBonificacion.registrarSalario(funcionario);
        //controlBonificacion.registrarSalario(gerenteJimena);
        controlBonificacion.registrarSalario(alexis);

        CuentaCorriente cc = new CuentaCorriente(1,1);
        CuentaAhorros ca = new CuentaAhorros(2,3);
        cc.depositar(2000);
        cc.transfiere(1000, ca);

        SistemaInterno sistema = new SistemaInterno();
        Gerente gerente1 = new Gerente();
        Administrador admin = new Administrador();

        sistema.autentica(gerente1);
        //sistema.autentica(admin);

        Cuenta cuenta = new CuentaAhorros(123, 456);
        cuenta.depositar(200);
        try {
            cuenta.saca(500);
        } catch (SaldoInsuficienteException e) {
            throw new RuntimeException(e);
        }

        System.out.println();
        System.out.println("Bonificiación del funcionario = " + federico.getBonificacion());
        System.out.println( federico.getNombre() + " Puede iniciar sesión? " + autenticado);
        System.out.println();
        System.out.println("Bonificiación del gerente = " + newGerente.getBonificacion());
        System.out.println( federico.getNombre() + " Puede iniciar sesión? " + autenticado);
        System.out.println();
        System.out.println(cc.getSaldo());
        System.out.println(ca.getSaldo());

    }
}