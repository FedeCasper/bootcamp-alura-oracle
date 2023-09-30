package com.bytebank.modelo;

import com.bytebank.modelo.Funcionario;

public class Contador extends Funcionario {

    @Override
    public double getBonificacion() {
        return 200;
    }
}
