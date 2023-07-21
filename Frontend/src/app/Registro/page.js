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

const Registro = () =>{
    Inicio("/Registro")
    const router = useRouter();
    //const [showDatosPersona, setShowDatosPersona ] = useState(true)
    const [contra2, setContra2] = useState(""); //cambio

    const defaultPersona = {
        correo: "",
        contrasena: "", //cambio
        //contraseña1: "",
        //contraseña2: "",
        nombres: "",
        apellidos: "",
        doc: "",
        numero: "",
        rol: ""
    }

    const [persona, setPersona] = useState(defaultPersona)
    

    const handleRegresar = () => {
        router.push("/");
    }
    /*const handleOnDropdownChange = (eventKey) => {
        if (eventKey === "persona")
            setShowDatosPersona(true)
        else
            setShowDatosPersona(false)
    }*/
    function validarCorreo(correo) {
        // Expresión regular para verificar si el correo contiene el carácter "@"
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }
    const handleOnClick = () => {
        
        if (persona.numero.length != 8){
            alert("Numero de DNI Invalido")
        }else if (persona.correo && !validarCorreo(persona.correo)){
            alert("Correo electronico invalido")
        }
        else if (persona.contrasena !== contra2) { //cambio
            alert("Las contraseñas no coinciden");
        }else if (Object.values(persona).some(value => value === "")) {
            alert("Por favor, complete todos los campos");
        }else{ 
            router.push('/');

            //cambio
            const personas = JSON.parse(window.localStorage.getItem("personas")) || [];
            personas.push(persona);
            window.localStorage.setItem("personas", JSON.stringify(personas));
            router.push("/Login")
            //cambio

            /*
            PersonaApi.save(persona)
            const personas = PersonaApi.getAll()
            let AUXArray = JSON.parse(localStorage.getItem("personas")) || [];
            AUXArray.push(persona)
            let arrayJSON = JSON.stringify(AUXArray)
            localStorage.setItem("personas",arrayJSON)
            console.log(personas)
            router.push("/Login")
            */
        }
    }

    return(
            
            <div className={styles.container}> 
                <Container>
                    <Row >
                        <h3>Sistema de Citas Atención a Estudiantes</h3>
                        <h4>Pagina de Registro</h4>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <FormLabel htmlFor='Correo'className={styles.color}>Correo</FormLabel>
                            <FormControl type='text' id="Correo"
                                value={persona.correo}
                                onChange={e => setPersona({...persona,correo: e.target.value})}/>
                        </Col>
                        <Col>
                            <FormLabel htmlFor='Correo'className={styles.color}>Contraseña</FormLabel>
                            <FormControl type='password' id="contraseña1"
                                value={persona.contrasena}
                                onChange={e => setPersona({...persona,contrasena: e.target.value})}/> {/**/}
                            <FormLabel htmlFor='Correo'className={styles.color}>Confirmar Contraseña</FormLabel>
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
                        <FormLabel htmlFor='nombres' className = {styles.color}>Nombres</FormLabel>
                            <FormControl type='text' id="nombres"
                                value={persona.nombres}
                                onChange={e => setPersona({...persona,nombres: e.target.value})}/>
                        
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
                        <FormLabel htmlFor='apellidos' className={styles.color}>Apellidos</FormLabel>
                            <FormControl type='text' id="apellidos"
                                value={persona.apellidos}
                                onChange={e => setPersona({...persona,apellidos: e.target.value})}/>
                        
                        <FormLabel htmlFor='numero'className={styles.color}>Número de Documento</FormLabel>
                            <FormControl type='number' id="numero"
                                value={persona.numero}
                                onChange={e => setPersona({...persona,numero: e.target.value})}/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                        <FloatingLabel className={styles.color} controlId="floatingSelect" label="Rol">
                            <Form.Select 
                                className={styles.color}
                                aria-label="Floating label select example"
                                id='rol'
                                name="rol"
                                value={persona.rol}
                                onChange={e => setPersona({...persona,rol: e.target.value})}>
                                    <option value="" className={styles.color}>***</option>
                                    <option value="estudiante" className={styles.color}>Estudiante</option>
                                    <option value="profesor" className={styles.color}>Profesor</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    <Row>

                        <Col className='bot d-flex justify-content-end'>
                                <Button variant="primary" type="submit" onClick={handleRegresar}>
                                    Canselar registro
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