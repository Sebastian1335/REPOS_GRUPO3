'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from 'react-bootstrap/Form'
import styles from './styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'


const Registro = () =>{

    return(
            
            <div>
                <Container>
                    <Row >
                        <h3>Sistema de Citas Atencion a Estudiantes</h3>
                        <h4>Pagina de Registro</h4>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <Form className='form' >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='color'>Correo Electrónico</Form.Label>
                                    <Form.Control type="email" placeholder=""/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form className='form'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='color'>contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                        
                            </Form>
                                <Form className='form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='color'>Confirmar contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="" />
                                </Form.Group>
                                
                            </Form>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p className='bcolor'>Datos Personales</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            
                            <Form className='form'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='color'>Nombres</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                        
                            </Form>
                            <FloatingLabel className='color' controlId="floatingSelect" label="Works with selects">
                                <Form.Select className='color' aria-label="Floating label select example">
                                    <option className='color'>Tipo de doucmento</option>
                                    <option value="1" className='color'>DNI</option>
                                    <option value="2" className='color'>Otro...</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <Form className='form'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='color'>Apellidos</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                        
                            </Form>
                                <Form className='form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='color'>Codigo Documento</Form.Label>
                                        <Form.Control type="password" placeholder="" />
                                </Form.Group>
                                
                            </Form>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                        <FloatingLabel className='color' controlId="floatingSelect" label="Works with selects">
                            <Form.Select className='color' aria-label="Floating label select example">
                                <option className='color'>Rol</option>
                                <option value="1" className='color'>Estudiante</option>
                                <option value="2" className='color'>Profesor</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className='bot d-flex justify-content-end'>
                            <Button variant="primary" type="submit" >
                                Ingresar
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Registro