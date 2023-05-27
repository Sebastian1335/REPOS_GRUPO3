'use client';

import styleL from '../../../src/app/Login/styleL.module.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
/*import Link from '../../components/Link/Link.jsx'*/
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {

        const data = JSON.parse(localStorage.getItem('personas'))
        let foundusuario = null
        let FoundRol = null
        if (data) {
            foundusuario = data.find(
                (item) => item.correo === usuario && item.contraseña1 === password
                )
            FoundRol = foundusuario.rol
        }

        if (foundusuario){
            //Conseguir el dato de nombres
            localStorage.setItem('nombreUsuario', foundusuario.nombres);
            //Conseguir el dato de rol
            localStorage.setItem('rol', foundusuario.rol);
            
            if (FoundRol === 'profesor'){
                router.push('/DocentePrincipal')
            }else{
                router.push('/AlumnoPrincipal')
            }
        }else{
            alert('Usuario o password incorrecto')
        }
            
    }

    return (
        <div className={styleL.container}>
            <div>
                <h3>Sistema de citas para Atención a Estudiantes</h3>
            </div>
        <Form className={styleL.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="text" placeholder="" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Text className="text-muted" >
                    
                        <Link href={"/Registro"}> Registro de nuevo usuario</Link> 
                    
                     
                    
                </Form.Text>
            </Form.Group>
            <div className={styleL.iz}>
            <div className={styleL.spc}>
                <Link href={"/"}>
                <Button variant="primary" type="button">
                    Salir
                </Button>
                </Link>
                
                
                <Button variant="primary" type="button" onClick={handleClick}>
                    Ingresar
                </Button>
                </div>
            </div>
    </Form>
    </div>
    )
} 

export default Login