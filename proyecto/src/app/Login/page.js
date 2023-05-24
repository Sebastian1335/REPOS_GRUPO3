'use client';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import Link from '../../components/Link/Link.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './styles.css'

const Login = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {
        if (usuario==="admin" && password==="admin") {
            router.push('/Login')
        } else
            alert('Usuario o password incorrecto')
    }

    return (
        <div className='container'>
            <div>
                <h3>Sistema de citas para Atencion a Estudiantes</h3>
            </div>
        <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo o Usuario</Form.Label>
                <Form.Control type="email" placeholder="" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
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
                
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
                </div>
            </div>
    </Form>
    </div>
    )
} 

export default Login