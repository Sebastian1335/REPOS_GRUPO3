'use client';

import { useEffect, useState } from 'react'

const Ejercicio2 = () => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(["Manzana", "Pera", "Naranja", "Mandarina"])
    }, [])

    return (
        <div>
            <h2>
            Ejercicio 2
            </h2>
            Imprimir el contenido de un arreglo de forma dinámica.

            <ul>
                    {
                        arr.map(fruta =>{
                            return (<li key={fruta}>{fruta}</li>)
                        })
                    }
            </ul>
        </div>
    )
} 

export default Ejercicio2