let personas = []

const save = (persona) => {
    personas.push(persona)
}

const getAll = () => {
    return personas;
}

const PersonaApi = { save, getAll }

export default PersonaApi