
import styleL from '../../../src/app/Login/styleL.module.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import Stack from 'react-bootstrap/Stack';
/*import Link from '../../components/Link/Link.jsx'*/
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import Inicio from "@/components/Inicio/inicio.jsx" //cambio

const FormularioLogin = ({usuario, onChangeUsuario, contrasena, onChangeContrasena, onLogin}) => {
    
    
    const router = useRouter()

    const handleClick = () => {
        onLogin();
    }

    return (
        <div className={styleL.container}>
            <div>
                <h3>Sistema de citas para Atención a Estudiantes</h3>
            </div>
        <Form className={styleL.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="text" placeholder="" value={usuario} onChange={onChangeUsuario}/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" value={contrasena} onChange={onChangeContrasena}/>
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
                <span> </span>
                
                <Button variant="primary" type="button" onClick={handleClick}>
                    Ingresar
                </Button>
                </div>
            </div>
    </Form>
    </div>
    )
} 

export default FormularioLogin