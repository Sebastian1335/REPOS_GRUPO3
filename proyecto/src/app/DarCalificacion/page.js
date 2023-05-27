'use client'
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css'; // Importa el archivo de estilos personalizados
const Calificacion = () => {
    const [calificacion, setCalificacion] = useState(0);
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [apellidoUsuario, setApellidoUsuario] = useState("");
    const [comentario, setComentario] = useState('');

    const handleCalificacionChange = (event) => {
      const value = parseFloat(event.target.value);
      setCalificacion(value);
    };


    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Calificación seleccionada: ${calificacion} estrellas`);
      console.log(`Comentario: ${comentario}`);

      // Aquí puedes agregar la lógica para enviar la calificación al servidor o realizar otras acciones necesarias
    };
    const handleComentarioChange = (event) => {
        const value = event.target.value;
        setComentario(value);
      };


    useEffect(() => {
        const nombreUsuario = localStorage.getItem("nombreUsuario");
        setNombreUsuario(nombreUsuario);
      }, []);

    return (
      <div className="calificacion-container">
        <h2>{nombreUsuario} {apellidoUsuario}</h2>
        <h2 className="calificacion-title">Calificar</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="calificacion">
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={calificacion}
              onChange={handleCalificacionChange}
              className="range-input"
            />
            <span className="calificacion-value">{calificacion}</span>
          </Form.Group>
          <Form.Group controlId="comentario">
          <Form.Label>Comentario:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comentario}
            onChange={handleComentarioChange}
          />
        </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">
            Enviar
          </Button>
        </Form>
      </div>
    );
  };
  
  export default Calificacion;