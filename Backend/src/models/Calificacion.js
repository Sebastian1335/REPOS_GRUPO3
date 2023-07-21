import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Calificacion = sequelize.define('Calificacion', {
    idCalificacion: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCita: {
        type:DataTypes.INTEGER
    },
    calificacion: {
        type:DataTypes.STRING
    },
    comentario: {
        type:DataTypes.STRING
    }
})

export default Calificacion