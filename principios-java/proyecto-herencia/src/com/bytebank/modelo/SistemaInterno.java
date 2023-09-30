package com.bytebank.modelo;

import com.bytebank.modelo.Autenticable;

public class SistemaInterno {

    private String clave = "secreta";

    public boolean autentica(Autenticable autenticable){
        boolean puedeIniciarSesion = autenticable.iniciarSesion(clave);
        if(puedeIniciarSesion){
            System.out.println("Login exitoso");
            return true;
        } else {
            System.out.println("Error login");
            return false;
        }
    }
}
