"use client";
import React, { useState, useEffect } from "react";

const CitasReservadas = () => {
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
      <style>
        {`
        .container {
          text-align: center;
        }
        
        h1 {
          margin-top: 20px;
        }
        
        .citaContainer {
          display: inline-block;
          width: 300px;
          margin: 20px;
          padding: 10px;
          border: 1px solid #ccc;
        }
        
        .citaContainer .numeroCita {
          font-size: 24px;
          font-weight: bold;
        }
        
        .citaContainer .nombre {
          margin-top: 5px;
          font-weight: bold;
        }
        
        .citaContainer .fecha {
          margin-top: 5px;
        }
        
        .pagination {
          margin-top: 20px;
        }
        
        .pagination button {
          margin: 0 5px;
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .pagination button:hover {
          background-color: #0056b3;
        }
      `}
      </style>
      <div className="container">
        <h1>Citas Reservadas</h1>
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
  );
};

export default CitasReservadas;
