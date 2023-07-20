
import CarreraRepository from "../repository/CarreraRepository.js";

const findAll = (req, res) => {
    const result = CarreraRepository.findAll();
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = CarreraRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const create = (req, res) => {
    const result = CarreraRepository.create(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req, res) => {
    const result = CarreraRepository.update(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const CarreraController = {findAll , findOne, create, update}

export default CarreraController