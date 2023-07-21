"use client";
import React, { useState, useEffect } from "react";
import TopBar from "@/components/TopBar/TopBar";
import Menu from "../../components/Menu/Menu.jsx";
import styles from "../ResumenCalificaciones/page.module.css";
import CalificacionApi from '@/api/calificaciones.js'
import Chip from '../../components/Chip/Chip.jsx'
import Inicio from "@/components/Inicio/inicio.jsx" //cambio
import rolApi from '../api/universidad.js'
import { TextEncoder } from 'text-encoding-utf-8';
 
export default function ResumenCalificaciones() {
  Inicio("/ResumenCalificaciones");
  
  const handleOnLoad = async() => {
    const result = await rolApi.findAll()
    console.log(result.data)
  }

  useEffect(() => {
    handleOnLoad()
    CalificacionApi.save({nombres: "Mario", apellidos: "Lopez", dia: 24, mes: "abril", year: 2024, estrellas: 5, descripcion: "El profesor fue muy claro y supo darme buenos consejos. Muchas gracias!"});
      CalificacionApi.save({nombres: "Sandra", apellidos: "Sanchez", dia: 23, mes: "abril", year: 2024, estrellas: 4.5, descripcion: "Por lo general estuvo bien, pero algunas cosas no entendí"});
      //console.log(CalificacionApi.getAll())
  }, [])
  
  const defaultCalificacion = {
      nombres: "",
      apellidos: "",
      dia: 0,
      mes: "",
      year: 0,
      estrellas: 0.0,
      descripcion: ""
  }

  const handleOnClick = () => {
      CalificacionApi.save(calificacion);
      const calificaciones = CalificacionApi.getAll();
      console.log(calificaciones);
  }


  return (
    <div>
      <h2>Calificaciones</h2>
      <hr />
      {CalificacionApi.getAll().map((c, index) => {
        return (
            <div>
                <Chip text={index+1} />
                <span>{c.nombres} {c.apellidos} - {c.dia} de {c.mes} de {c.year} - {c.estrellas} estrellas</span>
                <p>"{c.descripcion}"</p>
            </div>
        )
      })}
    </div>
  );
}