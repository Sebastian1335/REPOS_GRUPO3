let PersonaCursos = [{
    id: 1, 
    idPersona: 1,
    idCurso: 1
  }
]

  let counter = 1;

  const findAll = () => {
    return PersonaCursos;
  }

  const create = (PersonaCurso) => {
    counter++;
    const newObject = {...PersonaCurso, id: counter };
    PersonaCursos.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = PersonaCurso.find(x => x.id == id);

    return result;
  }

  const update = (PersonaCurso) => { 
    const index = PersonaCursos.findIndex(x => x.id === PersonaCurso.id)

    if (index > -1) {
        PersonaCursos[index] = PersonaCurso;
    }

    return PersonaCurso;
  }
  
  const PersonaCursoRepository = { findAll , findOne, create, update }


  export default PersonaCursoRepository