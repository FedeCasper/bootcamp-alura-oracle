package com.bytebank.modelo;

import com.bytebank.modelo.Funcionario;

public class ControlBonificacion {

    private double suma;

    public double registrarSalario(Funcionario funcionario){
        this.suma = this.suma + funcionario.getBonificacion();
        System.out.println("Calculo actual " + this.suma);
        return this.suma;
    }

}