'use client'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css'; // Importa el archivo de estilos personalizados
const Calificacion = () => {
    const [calificacion, setCalificacion] = useState(0);
  
    const handleCalificacionChange = (event) => {
      const value = parseFloat(event.target.value);
      setCalificacion(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Calificación seleccionada: ${calificacion} estrellas`);
      // Aquí puedes agregar la lógica para enviar la calificación al servidor o realizar otras acciones necesarias
    };
  
    return (
      <div className="calificacion-container">
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
          <Button variant="primary" type="submit" className="submit-button">
            Enviar
          </Button>
        </Form>
      </div>
    );
  };
  
  export default Calificacion;