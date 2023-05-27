'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/MenuAlumno/Menu';
import styles from '../DocentePrincipal/page.module.css'
import PersonaApi from '@/api/persona.js'
import Form from 'react-bootstrap/Form';
import Chip from '../../components/Chip/Chip.jsx'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles2 from '../Busqueda-docente/page.Busqueda.docente.css'
import Pagination from 'react-bootstrap/Pagination';


function Busqueda_docente() {
    const [MenuIsVisible, setMenuIsVisible] = useState(false);
    const frutas = ["Felipe Lopez Jimenez", "Juanito alcachofa"]
    const [arr, setArr] = useState(frutas)
    const [textBusqueda, setTextBusqueda] = useState("")
    function AparecerMenu() {
        setMenuIsVisible(!MenuIsVisible);
    }

    let BarraLateral;

    if (MenuIsVisible) {
        BarraLateral = <Menu />;
    }

    return (
        <><div>
            <TopBar onButtonClick={AparecerMenu}></TopBar>
            <div className={styles.Main}>
                <div className={styles.Info}>
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
                    {arr.filter(f => f.includes(textBusqueda))
                        .map(fruta => {
                            return (<li key={fruta} style={{ display: 'inline-block', borderColor: 'red' }}>
                                <Chip text={fruta}/>
                            </li>);
                        })}
                </ul>
                        <hr />
                    </div>
                    <div className={styles.Menu}>
                        {BarraLateral}
                    </div>
                </div>
                
            </div></>
        
    );
}


export default Busqueda_docente