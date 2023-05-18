'use client';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Ejercicio1 = () => {
    
    const[ contador, setContador] = useState(0)

    function handleClick() {
        setContador(contador + 1);
        console.log(contador);
    }
    
    return (
        <div>
            <h2>
            Ejercicio 1
            </h2>
            <p>
                Agregar un botón contador de Clicks.
            </p>
            <Button 
                variant="outline-primary"
                onClick={() => handleClick() }>HAZME CLICK</Button>

            <p>
                Uds ha hecho click { contador } veces. 
            </p>
            <button type="button" className="btn btn-primary">
            Profile <span className="badge badge-light">9</span>
            <span className="sr-only">unread messages</span>
            </button>
        </div>
    )
} 

export default Ejercicio1