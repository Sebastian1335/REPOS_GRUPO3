'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/Menu/Menu';
import styles from '../docente/page.module.css'


const Docente = () => {
    const [MenuIsVisible, setMenuIsVisible] = useState(true);
    
    function EsconderMenu()
    {
        setMenuIsVisible(!MenuIsVisible)
    }

    let BarraLateral;

    if (MenuIsVisible){
        BarraLateral = <Menu/>
    }
    
    return (
        <div>
            <TopBar onButtonClick={EsconderMenu}></TopBar>
            <div className={styles.tablero}>
                <h2 className={styles.texto}>Bienvenido, (Titulo) (Nombre)!</h2>
                <hr/>
                <div className={styles.content}>
                    {BarraLateral}
                    
                </div>
            </div>
        </div>
    )
} 

export default Docente