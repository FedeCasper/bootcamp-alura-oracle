package com.bytebank.modelo;

import java.util.Objects;

public class AutenticacionUtil {

    private String clave;

    public boolean iniciarSesion(String clave){
        return Objects.equals(this.clave, clave);
    }

    public void setClave(String clave){
        this.clave = clave;
    }
}
