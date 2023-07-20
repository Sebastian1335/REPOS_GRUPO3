let Carreras = [{
    id: 1, 
    idUniversidad: 1,
    desc: "Ingenieria de sistemas"
  }
]

  let counter = 1;

  const findAll = () => {
    return Carreras;
  }

  const create = (Carrera) => {
    counter++;
    const newObject = {...Carrera, id: counter };
    Carreras.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = Carrera.find(x => x.id == id);

    return result;
  }

  const update = (Carrera) => { 
    const index = Carreras.findIndex(x => x.id === Carrera.id)

    if (index > -1) {
        Carreras[index] = Carrera;
    }

    return Carrera;
  }
  
  const CarreraRepository = { findAll , findOne, create, update }


  export default CarreraRepository