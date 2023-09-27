public interface Autenticable {

    void setClave(String clave);

    boolean iniciarSesion(String clave);

}
