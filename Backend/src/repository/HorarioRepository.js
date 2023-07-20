let Horarios = [{
    id: 1, 
    idPersona: 1,
    horaInicio: "19:00",
    diaDeLaSemana: "Lunes",
    HoraFin: "21:00"
  }
]

  let counter = 1;

  const findAll = () => {
    return Horarios;
  }

  const create = (Horario) => {
    counter++;
    const newObject = {...Horario, id: counter };
    Horarios.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = Horario.find(x => x.id == id);

    return result;
  }

  const update = (Horario) => { 
    const index = Horarios.findIndex(x => x.id === Horario.id)

    if (index > -1) {
        Horarios[index] = Horario;
    }

    return Horario;
  }
  
  const HorarioRepository = { findAll , findOne, create, update }


  export default HorarioRepository