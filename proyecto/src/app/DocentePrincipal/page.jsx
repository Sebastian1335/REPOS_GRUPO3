'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/MenuDocente/Menu';
import styles from '../DocentePrincipal/page.module.css'


const Docente = () => {
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
                    <h2>Bienvenido, (Titulo) (Nombre)!</h2>
                    <hr/>  
                    <div className={styles.Fondo}>
                        <h2>Próximas Citas</h2>
                    </div>
                </div>

                <div className={styles.Menu}>
                    {BarraLateral}
                </div>
            </div>
        </div>
    )
} 

export default Docente