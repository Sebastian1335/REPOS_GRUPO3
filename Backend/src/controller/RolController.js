import RolRepository from "../repository/RolRepository.js";

const findAll = (req, res) => {
    const result = RolRepository.findAll();
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = RolRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({message: 'Ha ocurrido un error'})
}

const RolController = {findAll , findOne}

export default RolController
