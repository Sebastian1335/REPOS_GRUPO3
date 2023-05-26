"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar/TopBar";
import Menu from "@/components/MenuAlumno/Menu";
import styles from "../AlumnoPrincipal/page.module.css";

const Alumno = () => {
  //Mostrar nombre
  const router = useRouter();
  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    const nombre = localStorage.getItem("nombreUsuario");
    setNombreUsuario(nombre);
  }, []);

  //Mostrar Menu
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function aparecerMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  let barraLateral;

  if (menuIsVisible) {
    barraLateral = <Menu />;
  }

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

  return (
    <div>
      <TopBar onButtonClick={aparecerMenu}></TopBar>
      <div className={styles.Main}>
        <div className={styles.Info}>
          <h2>Bienvenido, {nombreUsuario}!</h2>
          <hr />
          <div className={styles.Fondo}>
            <h2>Próximas Citas</h2>
            <div className="container">
              {citasPagina.length > 0 ? (
                citasPagina.map((cita, index) => (
                  <div key={index} className="citaContainer">
                    <div className="numeroCita">
                      {(paginaActual - 1) * citasPorPagina + index + 1}
                    </div>
                    <div className="nombre">{cita.alumno}</div>
                    <div className="fecha">
                      {cita.dia} - {cita.horaInicio}
                    </div>
                  </div>
                ))
              ) : (
                <p>No tienes citas reservadas</p>
              )}
              {totalPaginas > 1 && (
                <div className="pagination">
                  {Array.from({ length: totalPaginas }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => cambiarPagina(index + 1)}
                      className={paginaActual === index + 1 ? "active" : ""}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.Menu}>{barraLateral}</div>
      </div>
    </div>
  );
};

export default Alumno;
