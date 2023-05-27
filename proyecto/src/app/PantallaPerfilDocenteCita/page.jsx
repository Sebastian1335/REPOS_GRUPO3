'use client';
import React, { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/MenuAlumno/Menu';
import styles from '../PantallaPerfilDocenteCita/styles.css';
import styles2 from "../ResumenCalificaciones/page.module.css";
import Chip from '../../components/Chip/Chip.jsx';

const PantallaPerfilDocenteCita = () => {
  const [MenuIsVisible, setMenuIsVisible] = useState(false);
  const BoxWithText = ({ text }) => (
    <div className="box">
      <p>{text}</p>
    </div>
  );
  const texts = [
    'Ingeniería de Software',
    'Programación Web',
    'Programación de Videojuegos',
    'Programación Orientada a Objetos'
  ];
  
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
          alert("Usted ha reservado la cita exitosamente para el " + citaReservada.dia + " a las " + citaReservada.horaInicio + ". Encontrará el detalle en su página de clase");
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
      <TopBar onButtonClick={AparecerMenu}></TopBar>
      <div className={styles2.Main}>
        <div className={styles2.Info}>
          <h2>Citas</h2>
          <hr />
          <div className="container">
            <div className="circle">JS</div>
            <div className="Descripcion">
              <p>Profesor Juan Lopez</p>
              <p>Magister en Ingenieria de Software</p>
            </div>
          </div>
          <div className="container">
            <div className="image-container">
              <img src="https://i0.wp.com/static3.wikia.nocookie.net/__cb20120124235024/zelda/es/images/d/d8/Link_(Spirit_Tracks)_2.png" alt="Imagen" />
            </div>
            <div className="text-container">
              <p>Candidato a Dr. en Matemáticas e Informática de la Universidad de Barcelona, España. Magíster en Dirección de Tecnologías de Información, Universidad ESAN, Perú. Master en Gestión de las Tecnologías de la Información, Universitat Ramon Llull, Barcelona, España. Investigador en temas relacionados al desarrollo y aplicación de herramientas interactivas para la educación. Director del desarrollo del videojuego 1814: La Rebelión del Cusco. Miembro profesional del International Game Developers Association (IGDA). Consultor en proyectos de desarrollo de software, videojuegos y realidad aumentada. Excoordinador de la Especialidad de Ingeniería Informática. Excoordinador del Grupo de Investigación Avatar-PUCP y de la Diplomatura de Desarrollo de Videojuegos.</p>
            </div>
            <div className="text2-container">
              <p>Correo Electrónico</p>
              <p><u>jlopez1949@ulima.edu.pe</u></p>
            </div>
          </div>
          <p className="Cursos">Cursos</p>
          <div className="container">
            {texts.map((text, index) => (
              <BoxWithText key={index} text={text} />
            ))}
          </div>
          <br />
          <h5>Fechas y horarios disponibles</h5>
          <hr />
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
        <div className={styles2.Menu}>{BarraLateral}</div>
      </div>
    </div>
  );
};

export default PantallaPerfilDocenteCita;