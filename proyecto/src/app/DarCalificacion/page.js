'use client'
import { useState, useEffect } from 'react';
import { Button, Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';

import './style.css'; // Importa el archivo de estilos personalizados
import CalificacionesApi from '@/api/calificaciones.js'
import Inicio from "@/components/Inicio/inicio.jsx" //cambio

const Calificacion = () => {
  Inicio("/DarCalificacion")  
  const [calificacion, setCalificacion] = useState(0);
    const [comentario, setComentario] = useState('');
    const [profesores, setProfesores] = useState([]);
    const [profesorSeleccionado, setProfesorSeleccionado] = useState(null);

    const handleCalificacionChange = (event) => {
      const value = parseFloat(event.target.value);
      setCalificacion(value);
    };

    
    const calificacionData = {
        nombreProfesor: `${profesorSeleccionado?.nombres} ${profesorSeleccionado?.apellidos}`,
        calificacion: calificacion,
        comentario: comentario,
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Calificación seleccionada: ${calificacion} estrellas`);
        console.log(`Comentario: ${comentario}`);
        console.log('Profesor seleccionado:', profesorSeleccionado);
            

      // Aquí puedes agregar la lógica para enviar la calificación al servidor o realizar otras acciones necesarias
        
        CalificacionesApi.save(calificacionData)
        const calif = CalificacionesApi.getAll()
        let AUXArray = JSON.parse(localStorage.getItem("calif")) || [];
        
        AUXArray.push(calificacionData)
        let arrayJSON = JSON.stringify(AUXArray)
        localStorage.setItem("calif",arrayJSON)
        console.log(calif)

    }

    const handleProfesorSelect = (profesor) => {
        setProfesorSeleccionado(profesor);
      };

    const handleComentarioChange = (event) => {
        const value = event.target.value;
        setComentario(value);
      };


    useEffect(() => {
        const personasData = JSON.parse(localStorage.getItem("personas"));

  // Filtrar los profesores
        const profesoresData = personasData.filter((persona) => persona.rol === "profesor");
        
  // Establecer la lista de profesores en el estado
        setProfesores(profesoresData);
    
    }, []);

    return (
        <div className="calificacion-container">
        <h2 className="calificacion-title">Calificar</h2>
        <Form onSubmit={handleSubmit}>
          
          <ListGroup>
            {profesores.map((profesor) => (
              <ListGroup.Item
                key={profesor.id}
                action
                active={profesorSeleccionado?.id === profesor.id}
                onClick={() => handleProfesorSelect(profesor)}
              >
                {`${profesor.nombres} ${profesor.apellidos}`}
              </ListGroup.Item>
            ))}
          </ListGroup>
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
          
        </Form>
      </div>
    );
  };
  
  export default Calificacion;