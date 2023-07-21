import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Persona = sequelize.define('Persona', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type:DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    tipoDocumento: {
        type:DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    idRol: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    contrasena: {
        type: DataTypes.STRING
    },
    idCarrera: {
        type: DataTypes.INTEGER
    },
    tituloPresentacion: {
        type: DataTypes.STRING
    },
    presentacion: {
        type: DataTypes.STRING
    },
    grado: {
        type: DataTypes.STRING
    }
})

export default Persona