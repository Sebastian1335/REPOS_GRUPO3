'use client'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import personaApi from '../api/persona.js'
import rolApi from '../api/rol.js'

export default function Admin() {
   
  const [personas, setPersonas] = useState([])
  const [roles, setRoles] = useState([])
  const [bus, setBus] = useState('')
  const [busq, setBusq] = useState('')

  const handleOnLoad = async() => {
    const result = await personaApi.findAll()
    setPersonas(result.data)
    const result2 = await rolApi.findAll()
    setRoles(result2.data)
    console.log(roles)
    console.log(roles.find(i => i.idRol == 1))
  }

  const handleBuscar = () => {
    setBusq(bus)
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
            <Form.Control value={bus} onChange={e => setBus(e.target.value)} type="text" placeholder="Ingrese..." />
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
                          <th scope="col">Carrera</th>
                        </tr>
                      </thead>
                      <tbody>
                        { personas?.filter(item => (item.nombre.toLowerCase().includes(busq.toLowerCase()))).map(item => (
                          <tr key={item.idPersona}>
                            <th scope="row" >
                              <a href={'mantenimiento/'+item.idPersona}>
                                {item.idPersona}
                              </a>
                              </th>
                            <td>{item.nombre} {item.apellido}</td>
                            <td>{item.tipoDocumento}: {item.dni}</td>
                            <td>{item.idRol}</td>
                            <td>{item.email}</td>
                            <td>{item.contrasena}</td>
                            <td>{item.idCarrera}</td>
                          </tr>
                        ))}
                      </tbody>
              </Table>
          </Col>
        </Row>
        <Row>
        <Col>
            <a className="btn text-white btn-lg btn-floating" style={{backgroundColor: '#ac2bac'}} href="/mantenimiento" role="button">
              <i className="bi bi-plus"></i>
              Nuevo Registro
            </a>
          </Col>
        </Row>
      </Container>
    </main>
  )
}