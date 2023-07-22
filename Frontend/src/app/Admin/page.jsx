'use client'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import personaApi from '../api/persona.js'

export default function Admin() {
   
  const [personas, setPersonas] = useState([])
  const [bus, setBus] = useState('')
  const [busq, setBusq] = useState('')

  const handleOnLoad = async() => {
    const result = await personaApi.findAll()
    setPersonas(result.data)
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
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">Tipo Documento</th>
                          <th scope="col">Número</th>
                          <th scope="col">Rol</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contraseña</th>
                          <th scope="col">Carrera</th>
                        </tr>
                      </thead>
                      <tbody>
                        { personas?.filter(item => (item.nombre.toLowerCase().includes(busq.toLowerCase()))).map(item => (
                          <tr key={item.id}>
                            <th scope="row" >
                              <a href={'mantenimiento/'+item.id}>
                                {item.id}
                              </a>
                              </th>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.tipoDocumento}</td>
                            <td>{item.dni}</td>
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