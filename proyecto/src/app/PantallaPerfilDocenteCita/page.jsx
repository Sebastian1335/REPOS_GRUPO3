'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/MenuAlumno/Menu';
import styles from '../PantallaPerfilDocenteCita/styles.css';
import Form from 'react-bootstrap/Form';
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
  return (
      <><div>
          <TopBar onButtonClick={AparecerMenu}></TopBar>
          <div className={styles.Main}>
              <div className={styles.Info}>
                  <h2>Atención de Citas</h2>
              <div className={styles.Fondo}>
                      <h2>Citas</h2></div>
              </div>
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
                      <div className="Cursos">
                          <p>Cursos</p>
                      </div>
                  </div>

                  <div className="text-container">
                      <p>Candidato a Dr. en Matemáticas e Informática de la Universidad de Barcelona, España. Magíster en Dirección de Tecnologías de Información, Universidad ESAN, Perú. Master en Gestión de las Tecnologías de la Información, Universitat Ramon Llull, Barcelona, España. Investigador en temas relacionados al desarrollo y aplicación de herramientas interactivas para la educación. Director del desarrollo del videojuego 1814: La Rebelión del Cusco. Miembro profesional del International Game Developers Association (IGDA). Consultor en proyectos de desarrollo de software, videojuegos y realidad aumentada. Excoordinador de la Especialidad de Ingeniería Informática. Excoordinador del Grupo de Investigación Avatar-PUCP y de la Diplomatura de Desarrollo de Videojuegos.</p>
                  </div>

                  <div className="text2-container">
                      <p>Correo Electrónico</p>
                      <p><u>jlopez1949@ulima.edu.pe</u></p>
                  </div>
              </div>
              </div>
              <div className="container">
                {texts.map((text, index) => (
                    <BoxWithText key={index} text={text} />
              ))}
            </div>
            </div><div className={styles.Menu}>{BarraLateral}</div></>

  );
};

export default PantallaPerfilDocenteCita;