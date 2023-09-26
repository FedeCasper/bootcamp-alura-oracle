public class Gerente extends Funcionario {

    private String clave;

    public void setClave (String clave){
        this.clave = clave;
    }

    public boolean iniciarSesion(String clave){
        if(clave == "secreta"){
            return true;
        } else {
            return false;
        }
    }

    // Sobreescribiendo un método
    public double getBonificacion(){
        return super.getSalario() + super.getBonificacion();
    }

    public boolean iniciarSesion(String clave, int contraseña){
        return true;
    }
}
