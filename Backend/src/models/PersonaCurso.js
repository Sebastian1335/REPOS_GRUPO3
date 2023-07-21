import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const PersonaCurso = sequelize.define('PersonaCurso', {
    idPersonaCurso: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type:DataTypes.INTEGER
    },
    idCurso: {
        type:DataTypes.INTEGER
    }
})

export default PersonaCurso