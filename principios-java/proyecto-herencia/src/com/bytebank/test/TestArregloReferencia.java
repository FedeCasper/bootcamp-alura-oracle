package com.bytebank.test;

import com.bytebank.modelo.*;

import java.util.Arrays;
import java.util.Objects;

public class TestArregloReferencia {

    public static void main(String[] args) {

        CuentaCorriente cc = new CuentaCorriente(22,44);
        CuentaCorriente[] cuentas = new CuentaCorriente[5];
        cuentas[1] = cc;

        System.out.println(Arrays.toString(cuentas));

        Cuenta[] cuentasAhorrosCorrientes = new Cuenta[3];
        cuentasAhorrosCorrientes[0] = new CuentaAhorros(17,25);
        cuentasAhorrosCorrientes[1] = new CuentaCorriente(50,52);

        Object[] objectarray = new Object[3];
        Cliente cliente1 = new Cliente();
        cliente1.setNombre("Casper");
        CuentaCorriente cuentaCorriente = new CuentaCorriente(25,25);
        CuentaAhorros cuentaAhorros = new CuentaAhorros(10,10);

        objectarray[0] = cliente1;
        objectarray[1] = cuentaAhorros;
        objectarray[2] = cuentaCorriente;

        System.out.println(objectarray[0]);

    }

}
