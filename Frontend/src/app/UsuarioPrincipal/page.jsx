"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//import TopBar from "@/components/TopBar/TopBar";
//import Menu from "@/components/MenuAlumno/Menu";
import styles from "@/app/page.module.css";
//import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Mascota from "../../components/MascotaSorpresa/page"
import Inicio from "@/components/Inicio/inicio.jsx" //cambio
import personaApi from "../api/persona.js";

const Usuario = () => {
  Inicio("/UsuarioPrincipal")
  //Mostrar nombre
  //const router = useRouter();
  const [nombreUsuario, setNombreUsuario] = useState("");

  const handleOnLoad = async() => {
    const result = await personaApi.findAll()
    setNombreUsuario(result.data.find(item => item.idPersona == window.localStorage.getItem("id")).nombre)
  }
  
  useEffect(() => {
    handleOnLoad()
    const nombreUsuario = window.localStorage.getItem("nombreUsuario");
    setNombreUsuario(nombreUsuario);
  }, []);

  //Mostrar Menu
  /*
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function aparecerMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  let barraLateral;

  if (menuIsVisible) {
    barraLateral = <Menu />;
  }
  */

  //Mostrar citas
  const [citas, setCitas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const citasPorPagina = 4;
  const totalPaginas = Math.ceil(citas.length / citasPorPagina);

  useEffect(() => {
    obtenerCitasReservadas();
  }, []);

  const obtenerCitasReservadas = () => {
    const storedCitas = localStorage.getItem("citas");
    if (storedCitas) {
      const citasReservadas = JSON.parse(storedCitas);
      setCitas(citasReservadas);
    }
  };

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  const citasPagina = citas.slice(
    (paginaActual - 1) * citasPorPagina,
    paginaActual * citasPorPagina
  );

  //<PrivateRoute rolesPermitidos={["estudiante"]}>
  //</PrivateRoute>
  /*
        {/*<TopBar onButtonClick={aparecerMenu}></TopBar>}
        <div className={styles.Main}>
        <div className={styles.Info}> 
                {/*<div className={styles.Menu}>{barraLateral}</div>*/
  return (
    <div>
      {window.localStorage.getItem("rol")==="profesor"?
        <h2>Bienvenido, Profesor(a) {nombreUsuario}!</h2>
      :
      <h2>Bienvenido, {nombreUsuario}!</h2>
      }
      <hr />
      <div className={styles.Fondo}>
        <h2>Próximas Citas</h2>
        <div className={styles.container}>
          {citasPagina.length > 0 ? (
            <div className={styles.citasGrid}>
              {citasPagina.map((cita, index) => (
                <div key={index} className={styles.citaContainer}>
                  <div className={styles.numeroCita}>
                    {(paginaActual - 1) * citasPorPagina + index + 1}
                  </div>
                  <div className={styles.infoCita}>
                    El {cita.dia} de {cita.horaInicio} a {cita.horaFin}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No tienes citas reservadas</p>
          )}
          {totalPaginas > 1 && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPaginas }, (_, index) => (
                <button
                  key={index}
                  onClick={() => cambiarPagina(index + 1)}
                  className={`${
                    paginaActual === index + 1 ? styles.active : ""
                  } ${styles.paginationButton}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.mascota}>
        <Mascota />
      </div>
    </div>
  );
};

export default Usuario;