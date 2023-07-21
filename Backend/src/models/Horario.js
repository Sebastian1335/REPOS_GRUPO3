import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Horario = sequelize.define('Horario', {
    idHorario: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type:DataTypes.INTEGER
    },
    horaInicio: {
        type:DataTypes.TIME
    },
    diaDeLaSemana: {
        type:DataTypes.DATE
    },
    horaFin: {
        type:DataTypes.TIME
    }
})

export default Horario