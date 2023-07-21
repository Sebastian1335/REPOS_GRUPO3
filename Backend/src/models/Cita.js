import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Cita = sequelize.define('Cita', {
    idCita: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersonaDocente: {
        type:DataTypes.INTEGER
    },
    idPersonaAlumno: {
        type: DataTypes.INTEGER
    },
    Fecha: {
        type:DataTypes.DATE
    },
    horaInicio: {
        type: DataTypes.TIME
    },
    horaFin: {
        type: DataTypes.TIME
    },
    enlaceSesion: {
        type: DataTypes.TIME
    },
    estado: {
        type: DataTypes.STRING
    },
    idCurso: {
        type: DataTypes.INTEGER
    }
})

export default Cita