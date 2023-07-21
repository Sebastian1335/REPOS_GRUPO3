import Calificacion from '../models/Calificacion.js'

const findAll = async () => {
  try {

      return await Calificacion.findAll();

  } catch(err) {
      console.error(err)

      return null;
  }
}

const create = async (calificacion) => {
  try {

      const newCalificacion = await Calificacion.create(calificacion);

      return newCalificacion;

  } catch(err) {
      console.error(err)

      return null;
  }
}

const findOne = async (id) => {
  try {
      return await Calificacion.findOne({
          where: {
              id
          }
      })
  }
  catch(err) {
      console.error(err)
      return null;
  }
}

const update = async (calificacion) => {
  try {
      const foundCalificacion =  await Calificacion.findOne({
          where: {
              id: calificacion.id
          }
      })

      foundCalificacion.set(calificacion)

      foundCalificacion.save()

      return foundCalificacion;

  }
  catch(err) {
      console.error(err)
      return null;
  }
}

const remove = async (id) => {
  try {
      await Calificacion.destroy({
          where: {
              id
          }
      })

      return true;
  }
  catch(err) {
      console.error(err)
      return null;
  }        

}

const CalificacionRepository = { findAll, create, findOne,update, remove };

export default CalificacionRepository