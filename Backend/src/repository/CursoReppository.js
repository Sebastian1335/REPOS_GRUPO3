let Cursos = [{
    id: 1, 
    idUniversidad: 1,
    desc: "Lenguajes de programación"
  }
]

  let counter = 1;

  const findAll = () => {
    return Cursos;
  }

  const create = (Curso) => {
    counter++;
    const newObject = {...Curso, id: counter };
    Cursos.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = Curso.find(x => x.id == id);

    return result;
  }

  const update = (Curso) => { 
    const index = Cursos.findIndex(x => x.id === Curso.id)

    if (index > -1) {
        Cursos[index] = Curso;
    }

    return Curso;
  }
  
  const CursoRepository = { findAll , findOne, create, update }


  export default CursoRepository