let Calificaciones = [{
    id: 1, 
    idCita: 1,
    Calificacion: 5,
    Comentario: "TaChevere"
  }
]

  let counter = 1;

  const findAll = () => {
    return Calificaciones;
  }

  const create = (Calificacion) => {
    counter++;
    const newObject = {...Calificacion, id: counter };
    Calificaciones.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = Calificacion.find(x => x.id == id);

    return result;
  }

  const update = (Calificacion) => { 
    const index = Calificaciones.findIndex(x => x.id === Calificacion.id)

    if (index > -1) {
        Calificaciones[index] = Calificacion;
    }

    return Calificacion;
  }
  
  const CalificacionRepository = { findAll , findOne, create, update }


  export default CalificacionRepository