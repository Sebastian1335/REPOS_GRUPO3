"use client";
import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar/TopBar";
import Menu from "@/components/MenuAlumno/Menu";
import styles from "./page.module.css";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactStars from "react-stars";

const CitaAlumno = () => {
  //Mostrar Menu
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Ver citas futuras");
  const [estrellas, setEstrellas] = useState(0);

  function aparecerMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  function handleClick() {
    if (buttonText == "Ver citas pasadas") {
      setButtonText("Ver citas futuras");
      return;
    } else {
      setButtonText("Ver citas pasadas");
    }
  }

  let barraLateral;

  if (menuIsVisible) {
    barraLateral = <Menu />;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ratingChanged = (newRating) => {
    setEstrellas(newRating);
  };

  return (
    <PrivateRoute rolesPermitidos={["estudiante"]}>
      <div>
        <TopBar onButtonClick={aparecerMenu}></TopBar>
        <div className={styles.Main}>
          <div className={styles.Info}>
            <Row>
              <Col className={styles.title}>Mis citas</Col>
              {Profesores.length > 0 ? (
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
            {Profesores.length > 0 ? (
              <div>
                <Row>
                  <Col className={styles.subtitle}>
                    Citas de asesoría reservadas:
                  </Col>
                  <Col className="text-end">
                    <Button
                      className={styles.secondButton}
                      onClick={handleClick}
                    >
                      <span className={styles.secondTxt}>{buttonText}</span>
                    </Button>
                  </Col>
                </Row>
                {buttonText === "Ver citas pasadas" ? (
                  <Row>
                    {Profesores.map((profesor) => (
                      <Col className="col-3 me-3">
                        <div className={styles.container}>
                          <Row>
                            <Col className={styles.subcontainer}>
                              <div className={styles.icono}></div>
                              <div className="mb-3">
                                <div className={styles.cardTitle}>
                                  {profesor.nombreCompleto}
                                </div>
                                <div className={styles.cardSubtitle}>
                                  {profesor.profesion}
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
                              {profesor.dia} - {profesor.horarioInicio}
                            </Col>
                          </Row>
                          <Row>
                            <Col className={styles.curso}>
                              Curso: {profesor.curso}
                            </Col>
                          </Row>
                          <Row>
                            <Col className={styles.zoom}>Enlace de Zoom</Col>
                          </Row>
                          <Row>
                            <Col className="text-end">
                              <Button className={styles.innerButton}>
                                <span className={styles.innerTxt}>
                                  Cancelar
                                </span>
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <Row>
                    {Profesores.map((profesor) => (
                      <Col className="col-3 me-3">
                        <div className={styles.container}>
                          <Row>
                            <Col className={styles.subcontainer}>
                              <div className={styles.icono}></div>
                              <div className="mb-3">
                                <div className={styles.cardTitle}>
                                  {profesor.nombreCompleto}
                                </div>
                                <div className={styles.cardSubtitle}>
                                  {profesor.profesion}
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
                              {profesor.dia} - {profesor.horarioInicio}
                            </Col>
                          </Row>
                          <Row>
                            <Col className={styles.curso}>
                              Curso: {profesor.curso}
                            </Col>
                          </Row>
                          <Row>
                            <Col className={styles.zoom}>Enlace de Zoom</Col>
                          </Row>
                          <Row>
                            <Col className="d-flex justify-content-end align-items-end mb-3">
                              <span className={styles.nota}>
                                {estrellas == 0
                                  ? "No calificado"
                                  : "Calificación: " + estrellas}
                              </span>
                            </Col>
                            <Col className="text-end">
                              <Button className={styles.innerButton}>
                                <span
                                  className={styles.innerTxt}
                                  onClick={handleShow}
                                >
                                  Calificar
                                </span>
                              </Button>
                            </Col>
                          </Row>
                          {/* DIALOG */}
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Califica la atención</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Es muy importante para nosotros saber cómo te fue
                              en tu sesión de asesoría.
                              <ReactStars
                                count={5}
                                size={24}
                                value={estrellas}
                                onChange={ratingChanged}
                                color2={"#ffd700"}
                              />
                            </Modal.Body>
                          </Modal>
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
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

export default CitaAlumno;

const Profesores = [
  {
    nombreCompleto: "Juan Lopez",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: require("../../../public/images/Profesor/profesor.png"),
    dia: "Lunes, 24 de abril de 2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
  },
  {
    nombreCompleto: "Adriana Sanchez",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: require("../../../public/images/Profesor/profesora.png"),
    dia: "Jueves, 27 de abril de 2023",
    horarioInicio: "04:00 pm",
    curso: "Programación orientada a objetos",
  },
];
