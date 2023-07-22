'use client';

import styleL from '../../../src/app/Login/styleL.module.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import Stack from 'react-bootstrap/Stack';
/*import Link from '../../components/Link/Link.jsx'*/
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import Inicio from "@/components/Inicio/inicio.jsx" //cambio
import personaApi from '../api/persona.js';
import FormularioLogin from './FormularioLogin.jsx';
import { useEffect } from 'react';

const Login = () => {
    
    const [usuario, setUsuario] = useState('')
    const [contrasena, setcontrasena] = useState('')
    const [personas, setPersonas] = useState([])

    const router = useRouter()

    const handleOnLoad = async () =>{
        const result = await personaApi.findAll()
        setPersonas(result.data)
    }
    const handleLogin = async () => {
        const user = personas.find((persona) => persona.email === usuario && persona.contrasena === contrasena)
        if (user){
            window.localStorage.setItem("id", user.idPersona)
            router.push("/UsuarioPrincipal")
        }else{
            alert("Credenciales invalidas")
        }
    }

    useEffect(()=>{
        handleOnLoad()
    }, [])
    return (
        <>
            <FormularioLogin
            usuario={usuario}
            onChangeUsuario={(e) => setUsuario(e.target.value)}
            contrasena={contrasena}
            onChangeContrasena={(e) => setcontrasena(e.target.value)}
            onLogin = {handleLogin}
            />
        </>
    )
} 

export default Login