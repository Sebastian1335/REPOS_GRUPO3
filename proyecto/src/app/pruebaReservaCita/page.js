"use client";
import React, { useState, useEffect } from "react";

const RegistroCita = () => {
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  useEffect(() => {
    obtenerHorariosDisponibles();
  }, []);

  const obtenerHorariosDisponibles = () => {
    const storedHorario = localStorage.getItem("horario");
    if (storedHorario) {
      const horario = JSON.parse(storedHorario);
      setHorariosDisponibles(horario);
    }
  };

  const filtrarHorarios = () => {
    if (fechaSeleccionada === "") {
      return horariosDisponibles;
    } else {
      return horariosDisponibles.filter(
        (horario) => horario.dia === fechaSeleccionada
      );
    }
  };

  const reservarCita = () => {
    if (opcionSeleccionada !== null) {
      const citaReservada = filtrarHorarios()[opcionSeleccionada];
      const storedCitas = localStorage.getItem("citas");
      let citas = storedCitas ? JSON.parse(storedCitas) : [];
      citas.push(citaReservada);
      console.log(citas);
      localStorage.setItem("citas", JSON.stringify(citas));
      window.location.href = "/pruebaPagPrincipalAlum";
    } else {
      alert("Por favor, selecciona una opción antes de reservar.");
    }
  };

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
        
        label {
          display: block;
          margin-top: 20px;
        }
        
        input[type="date"] {
          margin-bottom: 20px;
        }
        
        .horarioItem {
          display: inline-block;
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          cursor: pointer;
        }
        
        .horarioItem.selected {
          background-color: #e0e0e0;
        }
        
        .numeroHorario {
          font-size: 18px;
          font-weight: bold;
        }
        
        .horarioDetalle {
          margin-top: 5px;
        }
        
        .reservarBtn {
          display: block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .reservarBtn:hover {
          background-color: #0056b3;
        }
      `}
      </style>
      <div className="container">
        <h1>Reserva de Citas</h1>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
          />
        </div>
        <div>
          <h2>Horarios Disponibles</h2>
          {filtrarHorarios().length > 0 ? (
            <div>
              {filtrarHorarios().map((horario, index) => (
                <div
                  key={index}
                  className={`horarioItem ${
                    opcionSeleccionada === index ? "selected" : ""
                  }`}
                  onClick={() => setOpcionSeleccionada(index)}
                >
                  <div className="numeroHorario">{index + 1}</div>
                  <div className="horarioDetalle">
                    <div>
                      {horario.dia} de {horario.horaInicio} a {horario.horaFin}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay horarios disponibles para esta fecha</p>
          )}
          {opcionSeleccionada !== null && (
            <button className="reservarBtn" onClick={reservarCita}>
              Reservar cita
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistroCita;
