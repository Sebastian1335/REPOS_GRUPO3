"use client";
import React, { useState, useEffect } from "react";
import styles from "../ResumenCalificaciones/page.module.css";
import Chip from '../../src/components/Chip/Chip.jsx';

export default function pruebaReserva(){
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
    const [horariosDisponibles, setHorariosDisponibles] = useState([]);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [busqFecha, setBusqFecha] = useState("");
    const [busqCurso, setBusqCurso] = useState("");
    
    useEffect(() => {
      obtenerHorariosDisponibles();
    }, []);
    
    const obtenerHorariosDisponibles = () => {
      const storedHorario = localStorage.getItem("horario");
      if (storedHorario) {
        setHorariosDisponibles(JSON.parse(storedHorario));
        console.log(JSON.parse(storedHorario))
      }
    };
    
    const filtrarHorarios = () => {
      return horariosDisponibles.filter(
        (h) => ((h.dia === busqFecha || busqFecha==="") && (h.curso === busqCurso || busqCurso===""))
      );
    };
    
    const reservarCita = () => {
      if (opcionSeleccionada !== null){
        const citaReservada = filtrarHorarios()[opcionSeleccionada];
        const storedCitas = localStorage.getItem("citas");
        let citas = storedCitas ? JSON.parse(storedCitas) : [];
        citas.push(citaReservada);
        console.log(citas);
        console.log("separación");
        localStorage.setItem("citas", JSON.stringify(citas));
        window.location.href = "/AlumnoPrincipal";
      }else{
        alert("https://www.youtube.com/watch?v=N025nnrcGrc&t=139s");
      }
    };

    const cambiarFecha = (fecha) => {
      setOpcionSeleccionada(null);
      setBusqFecha(fecha);
    }

    const cambiarCurso = (curso) => {
      setOpcionSeleccionada(null);
      setBusqCurso(curso);
    }
    
    return (
      <div>
        <div className={styles.Main}>
          <div className={styles.Info}>
            <h1>Fechas y horarios disponibles</h1>
            <br />
            <input type="date" placeholder="Ingrese una Fecha" value={busqFecha} onChange={(e) => cambiarFecha(e.target.value)} />
            <input type="text" placeholder="Curso de Interés" value={busqCurso} onChange={(e) => cambiarCurso(e.target.value)} />
            <p>DD/MM/YYYY</p>
            <div>
              {!(busqFecha==="" && busqCurso==="") ?
                <div>
                  {filtrarHorarios().length>0 ?
                    <div>
                      {filtrarHorarios().map((h, index) => (
                        <div key={index} className={`horarioItem ${opcionSeleccionada===index ? "selected":""}`} onClick={() => setOpcionSeleccionada(index)}>
                          <Chip text={h.horaInicio} />
                        </div>
                      ))}
                      <ul>
                        <li>Las sesiones son de 30 minutos</li>
                      </ul>
                    </div>
                  :
                    <p>No hay ninguna asesoría disponible con los filtros que ha usado</p>
                  }
                  {opcionSeleccionada !== null ?
                    <button className="reservarBtn" onClick={reservarCita}>Reservar cita</button>
                  :
                    null
                  }
                </div>
              :
                <p>Elige un filtro de búsqueda</p>
              }
              </div>
            </div>
          </div>
        </div>
      );
};