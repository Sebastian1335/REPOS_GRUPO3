'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/Menu/Menu';
import styles from '../UsuarioPrincipal/page.module.css'
import PersonaApi from '@/api/persona.js'
import Form from 'react-bootstrap/Form';
import Chip from '../../components/Chip/Chip.jsx'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles2 from './page.Busqueda.docente.css'
import Pagination from 'react-bootstrap/Pagination';
import Inicio from "@/components/Inicio/inicio.jsx" //cambio


function Busqueda_docente() {
    Inicio("/BusquedaDocente")
    const frutas = ["Felipe Lopez Jimenez", "Juanito alcachofa"]
    const [arr, setArr] = useState(frutas)
    const [textBusqueda, setTextBusqueda] = useState("")

    return (
        <div>
            <h2>Reserva de cita</h2>
            <Tabs
                defaultActiveKey="Por nombre"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Por nombre" title="Por nombre">
                    Búsqueda por nombre
                </Tab>
                <Tab eventKey="Por fecha" title="Por fecha">
                    Búsqueda por fecha
                </Tab>
            </Tabs>
            <Form.Control
                className='Barra_Busqueda'
                type="text"
                value={textBusqueda}
                onChange={e => setTextBusqueda(e.target.value)}
            ></Form.Control>
            <p>Ingrese nombre de docente, universidad o curso</p>
            <ul className="nobullets">
                {arr.filter(f => f.includes(textBusqueda)).map(fruta => {
                    return (<li key={fruta} style={{ display: 'inline-block', borderColor: 'red' }}>
                        <Chip text={fruta}/></li>);
                    })
                }
            </ul>
            <hr />
        </div>        
    );
}


export default Busqueda_docente