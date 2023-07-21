import { DataTypes, ForeignKeyConstraintError } from 'sequelize'
import sequelize from '../config/database.js'

const Universidad = sequelize.define('Universidad', {
    idUniversidad: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type:DataTypes.STRING
    }
})

export default Universidad