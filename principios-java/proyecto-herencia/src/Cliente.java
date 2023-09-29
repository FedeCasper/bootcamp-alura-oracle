import java.util.Objects;

public class Cliente implements Autenticable{

    private String nombre;
    private String documento;
    private String telefono;
    private AutenticacionUtil util;

    public Cliente() {
    }

    public Cliente(AutenticacionUtil util) {
        this.util = new AutenticacionUtil();
    }

    @Override
    public void setClave(String clave) {
        this.util.setClave(clave);
    }

    @Override
    public boolean iniciarSesion(String clave) {
        return this.util.iniciarSesion(clave);
    }
}
