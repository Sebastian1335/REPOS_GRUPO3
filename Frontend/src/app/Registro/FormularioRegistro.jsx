import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from '../Registro/styles.module.css'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import { useRouter } from 'next/navigation'

const FormularioRegistro = ({persona, onClick, onCancelar}) =>{
    //const [showDatosPersona, setShowDatosPersona ] = useState(true)
    const [contra2, setContra2] = useState(""); 
    const [datosPersona, setDatosPersona] = useState(persona)
    const router = useRouter()


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

    const handleOnClick = async () => {
        
        if (datosPersona.dni.length != 8){
            alert("dni de DNI Invalido")
        }else if (datosPersona.email && !validaremail(datosPersona.email)){
            alert("email electronico invalido")
        }
        else if (datosPersona.contrasena !== contra2) { //cambio
            alert("Las contraseñas no coinciden");
        }else{ 
            router.push('/');
            await onClick(datosPersona)
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
                            <FormLabel htmlFor='email'className={styles.color}>Email</FormLabel>
                            <FormControl type='text' id="email"
                                value={datosPersona.email}
                                onChange={e => setDatosPersona({...datosPersona,email: e.target.value})}/>
                        </Col>
                        <Col>
                            <FormLabel htmlFor='email'className={styles.color}>Contraseña</FormLabel>
                            <FormControl type='password' id="contraseña1"
                                value={datosPersona.contrasena}
                                onChange={e => setDatosPersona({...datosPersona,contrasena: e.target.value})}/> {/**/}
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
                                value={datosPersona.nombre}
                                onChange={e => setDatosPersona({...datosPersona,nombre: e.target.value})}/>
                        
                            <FloatingLabel className= {styles.ex} controlId="floatingSelect" label="Tipo Documento">
                                <Form.Select className={styles.color} aria-label="Floating label select example"
                                    id='doc'
                                    name='doc' value={datosPersona.tipoDocumento}
                                    onChange={e => setDatosPersona({...datosPersona,tipoDocumento: e.target.value})}>
                                    <option value="" className={styles.color}>***</option>

                                    <option value="DNI" className={styles.color}>DNI</option>
                                    <option value="PASAPORTE" className={styles.color}>PASAPORTE</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                        <FormLabel htmlFor='apellido' className={styles.color}>Apellido</FormLabel>
                            <FormControl type='text' id="apellido"
                                value={datosPersona.apellido}
                                onChange={e => setDatosPersona({...datosPersona,apellido: e.target.value})}/>
                        
                        <FormLabel htmlFor='dni'className={styles.color}>Número de Documento</FormLabel>
                            <FormControl type='number' id="dni"
                                value={datosPersona.dni}
                                onChange={e => setDatosPersona({...datosPersona,dni: e.target.value})}/>
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
                                value={datosPersona.idRol}
                                onChange={e => setDatosPersona({...datosPersona,idRol: e.target.value})}>
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
                            <Button variant="primary" type="submit" onClick={() => handleOnClick()}>
                                Ingresar
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleRegresar}>
                                Cancelar registro
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default FormularioRegistro