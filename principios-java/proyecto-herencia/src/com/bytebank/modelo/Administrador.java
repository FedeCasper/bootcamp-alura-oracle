package com.bytebank.modelo;

public class Administrador extends Funcionario implements Autenticable {

    private String clave;
    private AutenticacionUtil util;

    public Administrador() {
    }

    public Administrador(AutenticacionUtil util) {
        this.util = util;
    }

    @Override
    public double getBonificacion() {
        return this.getSalario();
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
