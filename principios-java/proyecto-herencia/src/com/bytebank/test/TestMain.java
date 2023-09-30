package com.bytebank.test;

import java.util.Arrays;

public class TestMain {

    public static void main(String[] args) {

        for(int i = 0 ; i < args.length ; i ++){
            System.out.println(args[i]);
        }

        int edad = 20;
        int edad2 = 15;
        int edad3 = 67;

        //Todo array debe ser creado con un tamaño fijo
        int[] edades = new int[5];
        System.out.println(Arrays.toString(edades));
        edades[2] = 30;
        System.out.println(Arrays.toString(edades));
        //System.out.println(edades[5]);

        //Otra forma de crear arrays en java
        int[] refs = {1,2,3,4,5};
        System.out.println(Arrays.toString(refs));
    }

}
