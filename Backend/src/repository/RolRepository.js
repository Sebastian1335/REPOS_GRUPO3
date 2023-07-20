let Rol = [{
    id: 1, nombre: "Estudiante"
  },
  {
    id: 2, nombre: "Profesor"
  }
]

  const findAll = () => {
    return Rol;
  }

  const findOne = (id) => {
    const result = Rol.find(x => x.id == id);

    return result;
  }
  
  const RolRepository = { findAll , findOne }


  export default RolRepository