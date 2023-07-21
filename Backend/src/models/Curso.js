import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Curso = sequelize.define('Curso', {
    idCurso: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUniversidad: {
        type:DataTypes.INTEGER
    }
})

export default Curso