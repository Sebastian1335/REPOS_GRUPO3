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

  const [horario, setHorario] = useState([]);
  const [newHorario, setNewHorario] = useState({
    diaSemana: "",
    horaInicio: "",
    horaFin: "",
    sesionLink: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedHorario = localStorage.getItem("horario");
    if (storedHorario) {
      setHorario(JSON.parse(storedHorario));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("horario", JSON.stringify(horario));
  }, [horario]);

  const handleInputChange = (e) => {
    setNewHorario({
      ...newHorario,
      [e.target.name]: e.target.value,
    });
  };

  const addHorario = (e) => {
    e.preventDefault();

    if (
      newHorario.diaSemana.trim() === "" ||
      newHorario.horaInicio === "" ||
      newHorario.horaFin === "" ||
      newHorario.sesionLink.trim() === ""
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setHorario([...horario, newHorario]);
    setNewHorario({
      diaSemana: "",
      horaInicio: "",
      horaFin: "",
      sesionLink: "",
    });
    setError("");
  };

  const deleteHorario = (index) => {
    const updatedHorario = [...horario];
    updatedHorario.splice(index, 1);
    setHorario(updatedHorario);
  };

  return (
    <div>
      <TopBar onButtonClick={AparecerMenu}></TopBar>
      <div className={styles.Main}>
        <div className={styles.Info}>
          <h2>Mis Horarios</h2>
          <hr />
          Agregue sus horarios disponibles de la semana
          <form onSubmit={addHorario} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                required
                id="dia"
                type="text"
                name="diaSemana"
                value={newHorario.diaSemana}
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
                value={newHorario.horaInicio}
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
                value={newHorario.horaFin}
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
                value={newHorario.sesionLink}
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

          <div className={styles.horarioContainer}>
            {horario.length > 0 ? (
              horario.map((item, index) => (
                <div key={index} className={styles.horarioItem}>
                  <p>{item.diaSemana}</p>
                  <p>{item.horaInicio}</p>
                  <p>{item.horaFin}</p>
                  <p>{item.sesionLink}</p>
                  <button onClick={() => deleteHorario(index)}>
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
