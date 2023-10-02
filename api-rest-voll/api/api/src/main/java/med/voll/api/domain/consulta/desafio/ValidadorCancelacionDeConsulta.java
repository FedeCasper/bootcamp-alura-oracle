package med.voll.api.domain.consulta.desafio;

import med.voll.api.domain.consulta.DatosAgendarConsulta;
import med.voll.api.domain.consulta.DatosCancelacionConsulta;

public interface ValidadorCancelacionDeConsulta {

    public void validar (DatosCancelacionConsulta datos);

}
