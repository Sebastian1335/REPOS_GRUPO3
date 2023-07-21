// let Personas = [{
//     id: 1, 
//     nombre: "Jorge",
//     apellido: "Orozco",
//     tipoDocumento: "DNI",
//     dni: "77115643",
//     idRol: "1",
//     email: "JOrozco@gmail.com",
//     contraseña: "1234",
//     idCarrera: "1",
//     tituloPresentacion: "nose",
//     presentacion: "nose",
//     grado: "3er Ciclo"

//   },
//   {
//     id: 2, 
//     nombre: "Lucas",
//     apellido: "Mamani",
//     tipoDocumento: "DNI",
//     dni: "73134543",
//     idRol: "2",
//     email: "LucasXD@gmail.com",
//     contraseña: "1234",
//     idCarrera: "1",
//     tituloPresentacion: "nose",
//     presentacion: "nose",
//     grado: "3er Ciclo"

//   }
// ]

import Persona from '../models/Persona.js'

  const findAll = async () => {
    try {

      return await Persona.findAll();

    } catch(err) {
      console.error(err)

      return null;
    }
  }

  const create = async (Persona) => {
    try {
      const newPersona = await Persona.create(persona);

      return newPersona;

    } catch(err) {
      console.error(err)

      return null;
    }
  }

  const findOne = async (id) => {
    const result = Persona.find(x => x.id == id);

    return result;
  }

  const update = (Persona) => { 
    const index = Personas.findIndex(x => x.id === Persona.id)

    if (index > -1) {
        Personas[index] = Persona;
    }

    return Persona;
  }
  
  const PersonaRepository = { findAll , findOne, create, update }


  export default PersonaRepository