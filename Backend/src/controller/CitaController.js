import CitaRepository from "../repository/CitaRepository.js";


const findAll = (req, res) => {
    const result = CitaRepository.findAll();
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = CitaRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const create = (req, res) => {
    const result = CitaRepository.create(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req, res) => {
    const result = CitaRepository.update(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const CitaController = {findAll , findOne, create, update}

export default CitaController

