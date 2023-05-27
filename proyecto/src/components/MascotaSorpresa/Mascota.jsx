"use client";
import React, { useState, useEffect } from "react";
import styles from "../MascotaSorpresa/Mascota.module.css";
import Confetti from "react-confetti";

const GeneradorNombresMascotas = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const [nombreGenerado, setNombreGenerado] = useState("");
  const [animalGenerado, setAnimalGenerado] = useState("");
  const [fraseMotivacional, setFraseMotivacional] = useState("");

  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  }, [showConfetti]);

  const generarNombreAleatorio = () => {
    const nombres = [
      "Pelusa",
      "Max",
      "Luna",
      "Firulais",
      "Daisy",
      "Rocky",
      "Coco",
      "Benito",
    ];

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    setNombreGenerado(nombres[indiceAleatorio]);
    setAnimalGenerado(obtenerImagenAnimalAleatoria());
    setFraseMotivacional(obtenerFraseMotivacionalAleatoria());
    setShowConfetti(true);
  };

  const obtenerImagenAnimalAleatoria = () => {
    const imagenesAnimales = [
      "https://www.pngmart.com/files/16/Little-Kitten-PNG-HD.png",
      "https://www.pngplay.com/wp-content/uploads/12/Dog-PNG-Background.png",
      "https://www.pngplay.com/wp-content/uploads/9/Rabbit-Transparent-Background.png",
      "https://www.pngplay.com/wp-content/uploads/9/Hamster-PNG-Photo-Image.png",
    ];
    const indiceAleatorio = Math.floor(Math.random() * imagenesAnimales.length);
    return imagenesAnimales[indiceAleatorio];
  };

  const obtenerFraseMotivacionalAleatoria = () => {
    const frasesMotivacionales = [
      "La educación es la clave para abrir el mundo.",
      "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
      "Cree que puedes y estarás a medio camino.",
      "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
      "La única forma de hacer un gran trabajo es amar lo que haces.",
    ];
    const indiceAleatorio = Math.floor(
      Math.random() * frasesMotivacionales.length
    );
    return frasesMotivacionales[indiceAleatorio];
  };

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Generador de Mascotas</h2>
      {nombreGenerado && (
        <div className={styles.sorpresa}>
          <p className={styles.nombre}>{nombreGenerado}</p>
          <img
            src={animalGenerado}
            alt="Animal Generado"
            className={styles.animalImage}
          />
          <p className={styles.frase}>{fraseMotivacional}</p>
        </div>
      )}
      <div>
        {showConfetti && <Confetti />}
        <button className={styles.btn} onClick={generarNombreAleatorio}>¡Presiona aquí!</button>
      </div>
    </div>
  );
};

export default GeneradorNombresMascotas;
