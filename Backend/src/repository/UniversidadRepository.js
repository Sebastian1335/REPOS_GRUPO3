import Universidad from '../models/Universidad.js'

const findAll = async () => {
    try {

        return await Universidad.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (universidad) => {
    try {

        const newUniversidad = await Universidad.create(universidad);

        return newUniversidad;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Universidad.findOne({
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

const update = async (universidad) => {
    try {
        const foundUniversidad =  await Universidad.findOne({
            where: {
                id: universidad.id
            }
        })

        foundUniversidad.set(universidad)

        foundUniversidad.save()

        return foundUniversidad;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Universidad.destroy({
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

const UniversidadRepository = { findAll, create, findOne,update, remove };

export default UniversidadRepository