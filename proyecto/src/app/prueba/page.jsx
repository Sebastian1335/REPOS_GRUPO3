"use client";
import { useState, useEffect } from 'react';

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    weekday: '',
    startTime: '',
    endTime: '',
    sessionLink: ''
  });

  useEffect(() => {
    const storedSchedule = localStorage.getItem('schedule');
    if (storedSchedule) {
      setSchedule(JSON.parse(storedSchedule));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  const handleInputChange = (e) => {
    setNewSchedule({
      ...newSchedule,
      [e.target.name]: e.target.value
    });
  };

  const addSchedule = (e) => {
    e.preventDefault();

    setSchedule([...schedule, newSchedule]);
    setNewSchedule({
      weekday: '',
      startTime: '',
      endTime: '',
      sessionLink: ''
    });
  };

  const deleteSchedule = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule.splice(index, 1);
    setSchedule(updatedSchedule);
  };

  return (
    <div>
      <h1>Horarios Disponibles</h1>

      <form onSubmit={addSchedule}>
        <label>
          Día de Semana:
          <input
            type="text"
            name="weekday"
            value={newSchedule.weekday}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Hora de Inicio:
          <input
            type="time"
            name="startTime"
            value={newSchedule.startTime}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Hora de Fin:
          <input
            type="time"
            name="endTime"
            value={newSchedule.endTime}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Enlace de Sesión:
          <input
            type="text"
            name="sessionLink"
            value={newSchedule.sessionLink}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Agregar</button>
      </form>

      <h2>Horarios Guardados</h2>
      <div className="schedule-container">
        {schedule.length > 0 ? (
          schedule.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-number">{index + 1}</div>
              <div className="schedule-details">
                <p>{item.weekday}</p>
                <p>{item.startTime}</p>
                <p>{item.endTime}</p>
                <p>{item.sessionLink}</p>
              </div>
              <button onClick={() => deleteSchedule(index)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No hay horarios guardados.</p>
        )}
      </div>

      <style jsx>{`
        .schedule-container {
          margin-top: 20px;
        }

        .schedule-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .schedule-number {
          background-color: purple;
          color: white;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }

        .schedule-details {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default SchedulePage;
