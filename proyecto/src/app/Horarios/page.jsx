"use client";
import { useState } from "react";
import { useEffect } from "react";
import TopBar from "@/components/TopBar/TopBar";
import Menu from "@/components/MenuDocente/Menu";
import styles from "../Horarios/page.module.css";

export default function HorarioDocente() {
  const [MenuIsVisible, setMenuIsVisible] = useState(false);

  function AparecerMenu() {
    setMenuIsVisible(!MenuIsVisible);
  }

  let BarraLateral;

  if (MenuIsVisible) {
    BarraLateral = <Menu />;
  }

  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    diaSemana: "",
    horaInicio: "",
    horaFin: "",
    sesionLink: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedSchedule = localStorage.getItem("schedule");
    if (storedSchedule) {
      setSchedule(JSON.parse(storedSchedule));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const handleInputChange = (e) => {
    setNewSchedule({
      ...newSchedule,
      [e.target.name]: e.target.value,
    });
  };

  const addSchedule = (e) => {
    e.preventDefault();

    if (
      newSchedule.diaSemana.trim() === "" ||
      newSchedule.horaInicio === "" ||
      newSchedule.horaFin === "" ||
      newSchedule.sesionLink.trim() === ""
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setSchedule([...schedule, newSchedule]);
    setNewSchedule({
      diaSemana: "",
      horaInicio: "",
      horaFin: "",
      sesionLink: "",
    });
    setError("");
  };

  const deleteSchedule = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule.splice(index, 1);
    setSchedule(updatedSchedule);
  };

  return (
    <div>
      <TopBar onButtonClick={AparecerMenu}></TopBar>
      <div className={styles.Main}>
        <div className={styles.Info}>
          <h2>Mis Horarios</h2>
          <hr />
          Agregue sus horarios disponibles de la semana
          <form onSubmit={addSchedule} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                required
                id="dia"
                type="text"
                name="diaSemana"
                value={newSchedule.diaSemana}
                onChange={handleInputChange}
              ></input>
              <label for="dia" className={styles.inputLabel}>
                Día de Semana
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                required
                id="inicio"
                type="text"
                name="horaInicio"
                value={newSchedule.horaInicio}
                onChange={handleInputChange}
              ></input>
              <label for="inicio" className={styles.inputLabel}>
                Hora de Inicio
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                required
                id="fin"
                type="text"
                name="horaFin"
                value={newSchedule.horaFin}
                onChange={handleInputChange}
              ></input>
              <label for="fin" className={styles.inputLabel}>
                Hora de Fin
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="sesionLink"
                className={styles.input}
                required
                id="enlace"
                value={newSchedule.sesionLink}
                onChange={handleInputChange}
              ></input>
              <label for="enlace" className={styles.inputLabel}>
                Enlace de Sesión
              </label>
            </div>

            <button className={styles.BtnAceptar} type="submit">
              Agregar
            </button>

            {error && <p>{error}</p>}

          </form>

          <div className={styles.scheduleContainer}>
            {schedule.length > 0 ? (
              schedule.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                  <p>{item.diaSemana}</p>
                  <p>{item.horaInicio}</p>
                  <p>{item.horaFin}</p>
                  <p>{item.sesionLink}</p>
                  <button onClick={() => deleteSchedule(index)}>
                    Eliminar
                  </button>
                </div>
              ))
            ) : (
              <p>No hay horarios guardados.</p>
            )}
          </div>
        </div>

        <div className={styles.Menu}>{BarraLateral}</div>
      </div>
    </div>
  );
}
