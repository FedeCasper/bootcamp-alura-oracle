package com.bytebank.modelo;

public class Gerente extends Funcionario implements Autenticable {

    @Override
    public double getBonificacion(){
        return 2000;
    }


    @Override
    public void setClave(String clave) {

    }

    @Override
    public boolean iniciarSesion(String clave) {
        return false;
    }
}
