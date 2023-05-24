"use client";
import React, { useState, useEffect } from "react";

const RegistrarCita = () => {
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

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
    window.location.href = "/PantallaTres";
  };

  return (
    <div>
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
              <div key={index}>
                <div>{index + 1}</div>
                <div>
                  <div>
                    {horario.dia} de {horario.horaInicio} a {horario.horaFin}
                  </div>
                </div>
                <button onClick={reservarCita}>
                  Reservar cita
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay horarios disponibles para esta fecha</p>
        )}
      </div>
    </div>
  );
};

export default RegistrarCita;
