package med.voll.api.paciente;

import med.voll.api.domain.direccion.DatosDireccion;

public record DatosRegistroPaciente(String nombre, String email, String telefono, String documento, DatosDireccion datosDireccion) {
}
