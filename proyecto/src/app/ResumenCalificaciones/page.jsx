"use client";
import React, { useState, useEffect } from "react";
import TopBar from "@/components/TopBar/TopBar";
import Menu from "@/components/MenuDocente/Menu";
import styles from "../ResumenCalificaciones/page.module.css";
import CalificacionApi from '@/api/calificaciones.js'
import Chip from '../../components/Chip/Chip.jsx'

export default function ResumenCalificaciones() {
    // Funciones para aparecer el menu
    const [MenuIsVisible, setMenuIsVisible] = useState(false);
    
    function AparecerMenu() {
      setMenuIsVisible(!MenuIsVisible);
    }
  
    let BarraLateral;
  
    if (MenuIsVisible) {
      BarraLateral = <Menu />;
    }

    //Otras funciones
    const defaultCalificacion = {
        id: 0,
        nombres: "",
        apellidos: "",
        dia: 0,
        mes: "",
        year: 0,
        estrellas: 0.0,
        descripcion: ""
    }

    const [calificacion, setCalificacion] = useState(defaultCalificacion);

    const handleOnClick = () => {
        CalificacionApi.save(calificacion);
        const calificaciones = CalificacionApi.getAll();
        console.log(calificaciones);

    }
    
    useEffect(() => {
        CalificacionApi.save({id: 1, nombres: "Mario", apellidos: "Lopez", dia: 24, mes: "abril", year: 2024, estrellas: 5, descripcion: "El profesor fue muy claro y supo darme buenos consejos. Muchas gracias!"});
        CalificacionApi.save({id: 2, nombres: "Sandra", apellidos: "Sanchez", dia: 23, mes: "abril", year: 2024, estrellas: 4.5, descripcion: "Por lo general estuvo bien, pero algunas cosas no entendí"});
        console.log(CalificacionApi.getAll())
    }, [])
  
    return (
        <><div>
          <TopBar onButtonClick={AparecerMenu}></TopBar>
          <div className={styles.Main}>
            <div className={styles.Info}>
              <h2>Calificaciones</h2>
              <hr />
              {CalificacionApi.getAll().map(c => {
                return (
                    <div>
                        <Chip text={c.id} />
                        <span>{c.nombres} {c.apellidos} - {c.dia} de {c.mes} de {c.year} - {c.estrellas} estrellas</span>
                        <p>"{c.descripcion}"</p>
                    </div>
                )
              })}
            </div>
    
            <div className={styles.Menu}>{BarraLateral}</div>
          </div>
        </div></>
      );
    }