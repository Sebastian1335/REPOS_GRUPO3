'use client'
//import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Button from 'react-bootstrap/Button'
import { FormControl, FormLabel } from 'react-bootstrap'
//import PersonaApi from '@/api/persona.js'
import Inicio from "@/components/Inicio/inicio.jsx" //cambio
import personaApi from "../api/persona.js"
import cursoApi from '../api/curso'
import { dividerClasses } from '@mui/material'
import FormularioRegistro from "./FormularioRegistro.jsx"



const Registro = () =>{
    Inicio("/Registro")
    const router = useRouter();
    //const [showDatosPersona, setShowDatosPersona ] = useState(true)

    const defaultPersona = {
        idPersona: 0,
        email: "",
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        dni: "",
        idRol: "",
        contrasena: "",
        idCarrera: "",
        tituloPresentacion: "",
        presentacion: "",
        grado: ""
    }

    const [personas, setPersonas] = useState([])
    const [persona, setPersona] = useState(defaultPersona)

    const handleOnLoad = async () =>{
        const result = await personaApi.findAll()
        setPersonas(result.data)
    }

    const handleAgregarPersona = () => {
        setIsFormVisible(true)
        setPersona(defaultPersona)
    }

    const handleGuardarPersona = async (persona) => {
        await personaApi.create(persona)
    }

    const HandleCancelarFormulario = () =>{
        setIsFormVisible(false)
    }

    const handleRegresar = () => {
        router.push("/");
    }


    /*const handleOnDropdownChange = (eventKey) => {
        if (eventKey === "persona")
            setShowDatosPersona(true)
        else
            setShowDatosPersona(false)
    }*/
    function validaremail(email) {
        // Expresión regular para verificar si el email contiene el carácter "@"
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    
    useEffect(()=>{
        handleOnLoad()
    },[])

    return(
        <>
            <div>
                <Button variant='primary' onClick={()=>handleAgregarPersona()}>
                    Ingresar
                </Button>
            </div>
            {<FormularioRegistro
                persona = {persona}
                onClick = {handleGuardarPersona}
                onCancelar = {HandleCancelarFormulario}
            />
                }
        </>
    )
}

export default Registro