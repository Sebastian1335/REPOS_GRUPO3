'use client'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import personaApi from '../api/persona.js'
import rolApi from '../api/rol.js'
import carreraApi from '../api/carrera.js'

export default function Admin() {
   
  const [personas, setPersonas] = useState([])
  const [roles, setRoles] = useState([])
  const [carreras, setCarreras] = useState([])
  const [bus, setBus] = useState('')
  const [busq, setBusq] = useState('')

  const handleOnLoad = async() => {
    const result = await personaApi.findAll()
    setPersonas(result.data)
    const result2 = await rolApi.findAll()
    setRoles(result2.data)
    const result3 = await carreraApi.findAll()
    setCarreras(result3.data)
  }

  const handleBuscar = () => {
    setBusq(bus)
  }

  const handleEliminar = async(id) => {
    await personaApi.remove(id)
    handleOnLoad()
  }
  
  useEffect(() => {
    handleOnLoad()
  }, [])

  return (
    <main >
      <Container>
        <Row>
          <Col>
            <h1>Usuarios existentes</h1>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <Form.Control value={bus} onChange={e => setBus(e.target.value)} type="text" placeholder="Ingrese nombre, documento o rol..." />
          </Col>
          <Col xs={2}>
            <Button onClick={() => handleBuscar()}>
              <i className="bi bi-search"></i>
               &nbsp;BUSCAR
              </Button>
          </Col>
        </Row>
        <Row>
          <Col >
            <br/>
            <Table striped bordered hover style={{ paddingTo: '20px'}}>
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Nombre completo</th>
                          <th scope="col">Documento</th>
                          <th scope="col">Rol</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contraseña</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        { personas?.filter(item => (item.nombre.toLowerCase().includes(busq.toLowerCase()) || item.dni.toString().includes(busq.toLowerCase()) || roles?.find(i => i.idRol == item.idRol)?.descripcion.toLowerCase().includes(busq.toLowerCase()) )).map(item => (
                          <tr key={item.idPersona}>
                            <td>{item.idPersona}</td>
                            <td>{item.nombre} {item.apellido}</td>
                            <td>{item.tipoDocumento}: {item.dni}</td>
                            <td>{roles?.find(i => i.idRol == item.idRol)?.descripcion}</td>
                            <td>{item.email}</td>
                            <td>{item.contrasena}</td>
                            <td><Button onClick={() => handleEliminar(item.idPersona)}>Eliminar</Button></td>
                          </tr>
                        ))}
                      </tbody>
              </Table>
          </Col>
        </Row>
      </Container>
    </main>
  )
}