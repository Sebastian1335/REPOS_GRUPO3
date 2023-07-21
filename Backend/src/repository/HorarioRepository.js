import Horario from '../models/Horario.js'

const findAll = async () => {
    try {

        return await Horario.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (horario) => {
    try {

        const newHorario = await Horario.create(horario);

        return newHorario;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Horario.findOne({
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

const update = async (horario) => {
    try {
        const foundHorario =  await Horario.findOne({
            where: {
                id: horario.id
            }
        })

        foundHorario.set(horario)

        foundHorario.save()

        return foundHorario;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Horario.destroy({
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

const HorarioRepository = { findAll, create, findOne,update, remove };

export default HorarioRepository