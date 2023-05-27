"use client";
import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar/TopBar";
import Menu from "@/components/MenuAlumno/Menu";
import styles from "./page.module.css";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CitaProfesor = () => {
  //Mostrar Menu
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [estrellas, setEstrellas] = useState(0);

  function aparecerMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  let barraLateral;

  if (menuIsVisible) {
    barraLateral = <Menu />;
  }

  return (
    <PrivateRoute rolesPermitidos={["profesor"]}>
      <div>
        <TopBar onButtonClick={aparecerMenu}></TopBar>
        <div className={styles.Main}>
          <div className={styles.Info}>
            <Row>
              <Col className={styles.title}>Mis citas</Col>
              {Alumnos.length > 0 ? (
                <Col className="text-end">
                  <Button className={styles.firstButton}>
                    <span className={styles.firstTxt}>Programar una Cita</span>
                  </Button>
                </Col>
              ) : (
                ""
              )}
            </Row>
            <hr />
            {Alumnos.length > 0 ? (
              <div>
                <Row>
                  <Col className={styles.subtitle}>
                    Citas de asesoría reservadas:
                  </Col>
                  <Col className="text-end">
                    <Button className={styles.secondButton}>
                      <span className={styles.secondTxt}>
                        Ver citas pasadas
                      </span>
                    </Button>
                  </Col>
                </Row>

                <Row>
                  {Alumnos.map((alumno) => (
                    <Col className="col-3 me-3">
                      <div className={styles.container}>
                        <Row>
                          <Col className={styles.subcontainer}>
                            <div className={styles.icono}>
                              <span>
                                {alumno.nombreCompleto.substring(0, 1)}
                              </span>
                              <span>
                                {alumno.nombreCompleto.substring(
                                  alumno.nombreCompleto.indexOf(" "),
                                  alumno.nombreCompleto.indexOf(" ") + 2
                                )}
                              </span>
                            </div>
                            <div className="mb-3">
                              <div className={styles.cardTitle}>
                                {alumno.nombreCompleto}
                              </div>
                              <div className={styles.cardSubtitle}>
                                {alumno.profesion}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={styles.imagen}>
                          <Col>
                            <div></div>
                          </Col>
                        </Row>
                        <Row>
                          <Col className={styles.horario}>
                            {alumno.dia} - {alumno.horarioInicio}
                          </Col>
                        </Row>
                        <Row>
                          <Col className={styles.curso}>
                            Curso: {alumno.curso}
                          </Col>
                        </Row>
                        <Row>
                          <Col className={styles.zoom}>Enlace de Zoom</Col>
                        </Row>
                        <Row>
                          <Col className="text-end">
                            <Button className={styles.innerButton}>
                              <span className={styles.innerTxt}>Cancelar</span>
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ) : (
              <div>
                <Row>
                  <Col className={styles.noCitas}>
                    Actualmente no tiene citas de Asesoría reservadas
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center mt-5">
                    <Button className={styles.firstButton}>
                      <span className={styles.firstTxt}>
                        Programar una Cita
                      </span>
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </div>
          <div className={styles.Menu}>{barraLateral}</div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default CitaProfesor;

const Alumnos = [
  {
    nombreCompleto: "Adriano Guzman",
    profesion: "Estudiante de Ingeniería de Sistemas",
    imagen: require("../../../public/images/Profesor/profesor.png"),
    dia: "Lunes, 24 de abril de 2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
  },
  {
    nombreCompleto: "Julio Gomez",
    profesion: "Estudiante de Ingeniería de Sistemas",
    imagen: require("../../../public/images/Profesor/profesora.png"),
    dia: "Jueves, 27 de abril de 2023",
    horarioInicio: "04:00 pm",
    curso: "Programación orientada a objetos",
  },
];
