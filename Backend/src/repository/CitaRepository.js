import Cita from '../models/Curso.js'

const findAll = async () => {
    try {

        return await Cita.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (cita) => {
    try {

        const newCita = await Cita.create(cita);

        return newCita;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Cita.findOne({
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

const update = async (cita) => {
    try {
        const foundCita =  await Cita.findOne({
            where: {
                id: cita.id
            }
        })

        foundCita.set(cita)

        foundCita.save()

        return foundCita;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Cita.destroy({
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

const CitaRepository = { findAll, create, findOne,update, remove };

export default CitaRepository