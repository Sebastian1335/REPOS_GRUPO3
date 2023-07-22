'use client'
import styles from '../Registro/styles.module.css'
//import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import { FormControl, FormLabel } from 'react-bootstrap'
//import PersonaApi from '@/api/persona.js'
import Inicio from "@/components/Inicio/inicio.jsx" //cambio
import personaApi from "../api/persona.js"




const Registro = () =>{
    Inicio("/Registro")
    const router = useRouter();
    //const [showDatosPersona, setShowDatosPersona ] = useState(true)
    const [contra2, setContra2] = useState(""); //cambio

    const defaultPersona = {
        id: 0,
        email: "",
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        dni: "",
        idRol: "",
        contrasena: "",
        idCarrera: "",
        tituloPresentacion: "",
        presentacion: "",
        grado: ""
    }
    const [personas, setPersonas] = useState([])
    const [persona, setPersona] = useState(defaultPersona)
    const [ isNew, setIsNew ] = useState(true);
    const [ isFormVisible, setIsFormVisible ] = useState(false)

    const handleRegresar = () => {
        router.push("/");
    }
    /*const handleOnDropdownChange = (eventKey) => {
        if (eventKey === "persona")
            setShowDatosPersona(true)
        else
            setShowDatosPersona(false)
    }*/
    function validaremail(email) {
        // Expresión regular para verificar si el email contiene el carácter "@"
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const handleOnClick = async (persona) => {
        
        if (persona.dni.length != 8){
            alert("dni de DNI Invalido")
        }else if (persona.email && !validaremail(persona.email)){
            alert("email electronico invalido")
        }
        else if (persona.contrasena !== contra2) { //cambio
            alert("Las contraseñas no coinciden");
        }else if (Object.values(persona).some(value => value === "")) {
            alert("Por favor, complete todos los campos");
        }else{ 
            router.push('/');
            await personaApi.create(persona);
           
            
            /*
            const personas = JSON.parse(window.localStorage.getItem("personas")) || [];
            personas.push(persona);
            window.localStorage.setItem("personas", JSON.stringify(personas));
            router.push("/Login")
            */
        }
    }

    return(
            
            <div className={styles.container}> 
                <Container>
                    <Row >
                        <h3>Sistema de Citas Atención a Estudiantes</h3>
                        <h4>Página de Registro</h4>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <FormLabel htmlFor='email'className={styles.color}>email</FormLabel>
                            <FormControl type='text' id="email"
                                value={persona.email}
                                onChange={e => setPersona({...persona,email: e.target.value})}/>
                        </Col>
                        <Col>
                            <FormLabel htmlFor='email'className={styles.color}>Contraseña</FormLabel>
                            <FormControl type='password' id="contraseña1"
                                value={persona.contrasena}
                                onChange={e => setPersona({...persona,contrasena: e.target.value})}/> {/**/}
                            <FormLabel htmlFor='email'className={styles.color}>Confirmar Contraseña</FormLabel>
                            <FormControl type='password' id="contraseña2"
                                value={contra2}
                                onChange={e => setContra2(e.target.value)}/> {/**/}
                            
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <p className={styles.bcolor}>Datos Personales</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormLabel htmlFor='nombre' className = {styles.color}>Nombre</FormLabel>
                            <FormControl type='text' id="nombre"
                                value={persona.nombre}
                                onChange={e => setPersona({...persona,nombre: e.target.value})}/>
                        
                            <FloatingLabel className= {styles.ex} controlId="floatingSelect" label="Tipo Documento">
                                <Form.Select className={styles.color} aria-label="Floating label select example"
                                    id='doc'
                                    name='doc' value={persona.doc}
                                    onChange={e => setPersona({...persona,doc: e.target.value})}>
                                    <option value="" className={styles.color}>***</option>

                                    <option value="DNI" className={styles.color}>DNI</option>
                                    <option value="PASAPORTE" className={styles.color}>PASAPORTE</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                        <FormLabel htmlFor='apellido' className={styles.color}>Apellido</FormLabel>
                            <FormControl type='text' id="apellido"
                                value={persona.apellido}
                                onChange={e => setPersona({...persona,apellido: e.target.value})}/>
                        
                        <FormLabel htmlFor='dni'className={styles.color}>Número de Documento</FormLabel>
                            <FormControl type='number' id="dni"
                                value={persona.dni}
                                onChange={e => setPersona({...persona,dni: e.target.value})}/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                        <FloatingLabel className={styles.color} controlId="floatingSelect" label="Rol">
                            <Form.Select 
                                className={styles.color}
                                aria-label="Floating label select example"
                                id='idRol'
                                name="idRol"
                                value={persona.idRol}
                                onChange={e => setPersona({...persona,idRol: e.target.value})}>
                                    <option value = "" className={styles.color}>***</option>
                                    <option value = "1" className={styles.color}>Estudiante</option>
                                    <option value = "2" className={styles.color}>Profesor</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    <Row>

                        <Col className='bot d-flex justify-content-end'>
                                <Button variant="primary" type="submit" onClick={handleRegresar}>
                                    Cancelar registro
                                </Button>
                                <Button variant="primary" type="submit" onClick={() => handleOnClick()}>
                                    Ingresar
                                </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Registro