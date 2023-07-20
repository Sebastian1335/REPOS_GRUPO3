let Universidades = [{
    id: 1, nombre: "Universidad de Lima"
  },
  {
    id: 2, nombre: "Universidad Cayetano Heredia"
  }
]

  let counter = 2;

  const findAll = () => {
    return Universidades;
  }

  const create = (Universidad) => {
    counter++;
    const newObject = {...Universidad, id: counter };
    Universidades.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = Universidad.find(x => x.id == id);

    return result;
  }

  const update = (Universidad) => { 
    const index = Universidades.findIndex(x => x.id === Universidad.id)

    if (index > -1) {
        Universidades[index] = Universidad;
    }

    return Universidad;
  }
  
  const UniversidadRepository = { findAll , findOne, create, update }


  export default UniversidadRepository