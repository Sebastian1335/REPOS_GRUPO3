"use client";
import { useState, useEffect } from 'react';

const AlumnoSchedulePage = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const storedSchedule = localStorage.getItem('schedule');
    if (storedSchedule) {
      setSchedule(JSON.parse(storedSchedule));
    }
  }, []);

  return (
    <div>
      <h1>Horarios Disponibles</h1>
      {schedule.length > 0 ? (
        schedule.map((item, index) => (
          <div key={index} className="schedule-item">
            <p>{item.weekday}</p>
            <p>{item.startTime}</p>
            <p>{item.endTime}</p>
            <p>{item.sessionLink}</p>
          </div>
        ))
      ) : (
        <p>No hay horarios disponibles.</p>
      )}
    </div>
  );
};

export default AlumnoSchedulePage;
