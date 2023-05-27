let calificaciones = []

const save = (calificacion) => {
    calificaciones.push(calificacion);
}

const getAll = () => {
    return calificaciones;
}

const CalificacionApi = {save, getAll}

export default CalificacionApi;