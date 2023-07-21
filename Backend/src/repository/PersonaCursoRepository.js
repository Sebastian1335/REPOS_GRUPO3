import PersonaCurso from '../models/PersonaCurso.js'

const findAll = async () => {
    try {

        return await PersonaCurso.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (personaCurso) => {
    try {

        const newPersonaCurso = await PersonaCurso.create(personaCurso);

        return newPersonaCurso;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await PersonaCurso.findOne({
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

const update = async (personaCurso) => {
    try {
        const foundPersonaCurso =  await PersonaCurso.findOne({
            where: {
                id: personaCurso.id
            }
        })

        foundPersonaCurso.set(personaCurso)

        foundPersonaCurso.save()

        return foundPersonaCurso;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await PersonaCurso.destroy({
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

const PersonaCursoRepository = { findAll, create, findOne,update, remove };

export default PersonaCursoRepository