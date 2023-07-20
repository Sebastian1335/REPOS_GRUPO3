"use client";
import React, { useState, useEffect } from "react";
//import TopBar from "@/components/TopBar/TopBar";
//import Menu from "../../../borrar/MenuDocente/Menu";
import styles from "./page.module.css";
import { FiX } from "react-icons/fi";
import Inicio from "@/components/Inicio/inicio.jsx" //cambio

export default function HorarioDocente() {
  Inicio("/AgregarHorarios")

<<<<<<< HEAD
  // Funciones para agregar horarios
  const defaultHorario = {dia: "", horaInicio: "", horaFin: "", enlace: ""}
  const [horario, setHorario] = useState(defaultHorario);
  //const [dia, setDia] = useState("");
  //const [horaInicio, setHoraInicio] = useState("");
  //const [horaFin, setHoraFin] = useState("");
  //const [enlace, setEnlace] = useState("");
=======
  // Constantes para agregar horarios
  const [horario, setHorario] = useState([]);
  const [dia, setDia] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [enlace, setEnlace] = useState("");
>>>>>>> d019e4745924f9e1271dfde85374c891ad1146ad

  useEffect(() => {
    obtenerHorario();
  }, []);

  const obtenerHorario = () => {
    const storedHorario = localStorage.getItem("horario");
    if (storedHorario) {
      const horarioData = JSON.parse(storedHorario);
      setHorario(horarioData);
    }
  };

  const agregarHorario = () => {
    // Verificar si algún campo está vacío
    if (Object.values(horario).some(value => value === "")) {
      alert("Por favor, complete todos los campos antes de agregar el horario.");
    }else{
      /*const nuevoHorario = {
        dia: dia,
        horaInicio: horaInicio,
        horaFin: horaFin,
        enlace: enlace,
      };*/

      //Guardar en el localStorage
      //const horarioData = [...horario, nuevoHorario];
      //setHorario(horarioData);
      localStorage.setItem("horario", JSON.stringify(horario));

      // Limpiar los campos después de agregar el horario
      setHorario(defaultHorario) //cambio
    }
  };

  const eliminarHorario = (index) => {
    const horarioData = [...horario];
    horarioData.splice(index, 1);
    setHorario(horarioData);
    localStorage.setItem("horario", JSON.stringify(horarioData));
  };

  return (
    <div>
      <h2>Mis Horarios</h2>
      <hr />
      Agregue sus horarios disponibles de la semana
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="date"
            required
            id="fecha"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          ></input>
          <label htmlFor="fecha" className={styles.inputLabel}>
            Día de Semana
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            required
            id="inicio"
            type='time'
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          ></input>
          <label htmlFor="inicio" className={styles.inputLabel}>
            Hora de Inicio
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type='time'
            value={horaFin}
            required
            id="fin"
            onChange={(e) => setHoraFin(e.target.value)}
          ></input>
          <label htmlFor="fin" className={styles.inputLabel}>
            Hora de Fin
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            value={enlace}
            onChange={(e) => setEnlace(e.target.value)}
            className={styles.input}
            required
            id="enlace"
          ></input>
          <label htmlFor="enlace" className={styles.inputLabel}>
            Enlace de Sesión
          </label>
        </div>

        <button
          className={styles.BtnAceptar}
          onClick={agregarHorario}
          type="submit"
        >
          Agregar
        </button>
      </form>
      <div className={styles.horarioContainer}>
        {horario.length > 0 ? (
          horario.map((horarioItem, index) => (
            <div key={index} className={styles.horarioItem}>
              <div className={styles.numeroHorario}>{index + 1}</div>
              <div className={styles.horarioDetalle}>
                <div>
                  El día {horarioItem.dia} de {horarioItem.horaInicio} a{" "}
                  {horarioItem.horaFin}
                </div>
              </div>

              <button
                className={styles.Btn}
                onClick={() => eliminarHorario(index)}
              >
                <FiX></FiX>
              </button>
            </div>
          ))
        ) : (
          <p>No hay horarios guardados.</p>
        )}
      </div>
    </div>
  );
}
