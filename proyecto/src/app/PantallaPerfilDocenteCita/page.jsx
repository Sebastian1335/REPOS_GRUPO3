'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/MenuAlumno/Menu';
import styles from '../DocentePrincipal/page.module.css'
import Form from 'react-bootstrap/Form';

const AtencionCita = () => {
    const [MenuIsVisible, setMenuIsVisible] = useState(false);
    
    function AparecerMenu()
    {
        setMenuIsVisible(!MenuIsVisible)
    }

    let BarraLateral;

    if (MenuIsVisible){
        BarraLateral = <Menu/>
    }
    
    return (
        <div>
            <TopBar onButtonClick={AparecerMenu}></TopBar>
            <div className={styles.Main}>
                <div className={styles.Info}>
                    <h2>Atención de Citas</h2>
                    <hr/>  
                    <div className={styles.Fondo}>
                        <h2>Citas</h2>
                    </div>
                </div>

                <div className={styles.Menu}>
                    {BarraLateral}
                </div>
            </div>
        </div>
    )
} 

export default AtencionCita