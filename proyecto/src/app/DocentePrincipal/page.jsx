'use client';
import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/MenuDocente/Menu';
import styles from '../DocentePrincipal/page.module.css'


const Docente = () => {
    //Aparecer nombre en la pantalla
    const router = useRouter();
    
    const [nombreUsuario, setNombreUsuario] = useState('');

    useEffect(() => {
        const nombreUsuario = localStorage.getItem('nombreUsuario');
        setNombreUsuario(nombreUsuario);
    }, []);
    
    //Aparecer Menu
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    
    function aparecerMenu()
    {
        setMenuIsVisible(!menuIsVisible);
    }

    let barraLateral;

    if (menuIsVisible){
        barraLateral = <Menu/>
    }
    
    return (
        <div>
            <TopBar onButtonClick={aparecerMenu}></TopBar>
            <div className={styles.Main}>
                <div className={styles.Info}>
                    <h2>Bienvenido, Profesor(a) {nombreUsuario}!</h2>
                    <hr/>  
                    <div className={styles.Fondo}>
                        <h2>Próximas Citas</h2>
                    </div>
                </div>

                <div className={styles.Menu}>
                    {barraLateral}
                </div>
            </div>
        </div>
    )
} 

export default Docente