"use client";
import React, { useState } from "react";
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
  return (
    <div>
      <TopBar onButtonClick={AparecerMenu}></TopBar>
      <div className={styles.Main}>
        <div className={styles.Info}>
          <h2>Mis horarios</h2>
          <hr />
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" className={styles.input} required id="dia" />
              <label for="dia" className={styles.inputLabel}>
                Día de Semana
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                required
                id="inicio"
              />
              <label for="inicio" className={styles.inputLabel}>
                Hora Inicio
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input typeof="text" className={styles.input} required id="fin" />
              <label for="fin" className={styles.inputLabel}>
                Hora Fin
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                required
                id="enlace"
              />
              <label for="enlace" className={styles.inputLabel}>
                Enlace de sesión
              </label>
            </div>

            <input
              className={styles.BtnAceptar}
              type="submit"
              value="Aceptar"
            ></input>
          </div>
        </div>

        <div className={styles.Menu}>{BarraLateral}</div>
      </div>
    </div>
  );
}