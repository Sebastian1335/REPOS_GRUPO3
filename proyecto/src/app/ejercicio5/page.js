'use client';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Ejercicio5 = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {
        if (usuario==="admin" && password==="admin") {
            router.push('/ejercicio6')
        } else
            alert('Usuario o password incorrecto')
    }

    return (
        <div>
            <h2>
                Ejercicio 5
            </h2>
            <p>
                Crear un formulario de Login (Usuario, Password, boton.)
                se debe comparar usuario y password contra valores en una lista.
                Si es exitoso, se debe redirigir hacia el ejercicio 6.
            </p>
            <Form.Control type="text" 
                placeholder="Usuario"
                onChange={e => setUsuario(e.target.value)} />
            <br />
            <Form.Control type="password" 
                placeholder="Password"
                onChange={e => setPassword(e.target.value)} />
            <br />
            <Button onClick={handleClick}>ENVIAR</Button>
        </div>
    )
} 

export default Ejercicio5