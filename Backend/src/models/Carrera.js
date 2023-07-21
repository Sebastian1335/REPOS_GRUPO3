import { DataTypes, ForeignKeyConstraintError } from 'sequelize'
import sequelize from '../config/database.js'

const Carrera = sequelize.define('Carrera', {
    idCarrera: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUniversidad: {
        type:DataTypes.INTEGER
    }
})

export default Carrera