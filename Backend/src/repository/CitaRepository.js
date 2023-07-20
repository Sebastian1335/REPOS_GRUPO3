let Citas = [{
    id: 1, 
    idPersonaDocente: 1,
    idPersonaAlumno: 2,
    Fecha: "20/07/2023",
    horaInicio: "18:00",
    horaFin: "20:00",
    enlaceSesion: "www.cita.com.pe",
    estado: "TamoActivoPapi",
    idCurso: 1
  }
]

  let counter = 1;

  const findAll = () => {
    return Citas;
  }

  const create = (Cita) => {
    counter++;
    const newObject = {...Cita, id: counter };
    Citas.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = Cita.find(x => x.id == id);

    return result;
  }

  const update = (Cita) => { 
    const index = Citas.findIndex(x => x.id === Cita.id)

    if (index > -1) {
        Citas[index] = Cita;
    }

    return Cita;
  }
  
  const CitaRepository = { findAll , findOne, create, update }


  export default CitaRepository