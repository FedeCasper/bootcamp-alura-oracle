package com.bytebank.test;

public class TestString {

    public static void main(String[] args) {

        String nombre = "Alura";
        // Ya no se usa
        //String nombre2 = new String("Alura");

        // String no puede ser modificado, nace y muere siendo el mismo,
        // en este caso lo que hago es volverlo a asignar. Un String es INMUTABLE
        nombre = nombre.replace("A", "a");
        nombre = nombre.concat("Cursos");
        System.out.println(nombre);


    }

}
