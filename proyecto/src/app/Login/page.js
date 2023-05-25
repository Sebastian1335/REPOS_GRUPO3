'use client';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import Link from '../../components/Link/Link.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import style from '../Login/styleL.css'

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
        <div className='container'>
            <div>
                <h3>Sistema de citas para Atencion a Estudiantes</h3>
            </div>
        <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="text" placeholder="" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Text className="text-muted" >
                    <button type="button" class="btn btn-link" to="/Registro">
                        <Link href="/Registro" text="Registro de nuevo usuario" /> 
                    </button>
                    <button type="button" class="btn btn-link"> 
                        <Link href="/app/page.js" text="Olvide mi contraseña" />
                    </button> 
                </Form.Text>
            </Form.Group>
            <div className='iz'>
                
                <Button variant="primary" type="button" class="btn btn-outline-primary">
                    Salir
                </Button>
                <div className='spc'>
                
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