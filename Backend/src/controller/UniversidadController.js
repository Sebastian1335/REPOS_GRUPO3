import UniversidadRepository from "../repository/UniversidadRepository.js";

const findAll = (req, res) => {
    const result = UniversidadRepository.findAll();
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = UniversidadRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const create = (req, res) => {
    const result = UniversidadRepository.create(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req, res) => {
    const result = UniversidadRepository.update(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const UniversidadController = {findAll , findOne, create, update}

export default UniversidadController
