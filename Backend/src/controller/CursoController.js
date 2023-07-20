import CursoRepository from "../repository/CursoReppository.js";


const findAll = (req, res) => {
    const result = CursoRepository.findAll();
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = CursoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const create = (req, res) => {
    const result = CursoRepository.create(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req, res) => {
    const result = CursoRepository.update(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const CursoController = {findAll , findOne, create, update}

export default CursoController