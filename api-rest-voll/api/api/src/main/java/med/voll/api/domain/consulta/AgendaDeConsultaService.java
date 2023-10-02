package med.voll.api.domain.consulta;

import med.voll.api.domain.consulta.desafio.ValidadorCancelacionDeConsulta;
import med.voll.api.domain.consulta.validaciones.HorarioDeAnticipacion;
import med.voll.api.domain.consulta.validaciones.ValidadorDeConsultas;
import med.voll.api.domain.medico.Medico;
import med.voll.api.domain.medico.MedicoRepository;
import med.voll.api.domain.paciente.Paciente;
import med.voll.api.domain.paciente.PacienteRepository;
import med.voll.api.infra.errores.ValidacionDeIntegridad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaDeConsultaService {

    @Autowired
    ConsultaRepository consultaRepository;
    @Autowired
    MedicoRepository medicoRepository;
    @Autowired
    PacienteRepository pacienteRepository;

    List<ValidadorDeConsultas> validadores;

    @Autowired
    private List<ValidadorCancelacionDeConsulta> validadorCancelacionDeConsultas;


    public DatosDetalleConsulta agendar (DatosAgendarConsulta datos){

        if(!pacienteRepository.findById(datos.idPaciente()).isPresent()){
            throw new ValidacionDeIntegridad("Este id para el paciente no fue encontrado");
        }
        if(datos.idMedico() != null && !medicoRepository.existsById(datos.idMedico())){
            throw new ValidacionDeIntegridad("El id para este médico no fue encontrado");
        }

        validadores.forEach( validador -> validador.validar(datos));

        var paciente = pacienteRepository.findById(datos.idPaciente()).get();
        var medico = seleccionarMedico(datos);
        if(medico == null){
            throw new ValidacionDeIntegridad("No existe médico disponible en ese horario y esa especialidad");
        }
        var consulta = new Consulta(null, medico, paciente, null, datos.fecha());
        consultaRepository.save(consulta);

        return new DatosDetalleConsulta(consulta);
    }

    public void cancelar (DatosCancelacionConsulta datosCancelacionConsulta){
        if(!consultaRepository.existsById(datosCancelacionConsulta.idConsulta())){
            throw new ValidacionDeIntegridad("Id de la consulta informado no existe");
        }

        validadorCancelacionDeConsultas.forEach( validacion -> validacion.validar(datosCancelacionConsulta));
        var consulta = consultaRepository.getReferenceById(datosCancelacionConsulta.idConsulta());
        consulta.cancelar(datosCancelacionConsulta.motivoCancelacion());
    }

    private Medico seleccionarMedico(DatosAgendarConsulta datos) {
        if(datos.idMedico() != null){
            return medicoRepository.getReferenceById(datos.idMedico());
        }
        if(datos.especialidad() == null){
            throw new ValidacionDeIntegridad("Debe seleccionarse una especialidad");
        }
        return medicoRepository.seleccionarMedicoConEspecialidadEnFecha(datos.especialidad(), datos.fecha());
    }

}
