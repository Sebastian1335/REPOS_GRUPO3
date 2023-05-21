import styles from '../Cita/Cita.module.css'

export default function Cita() {
    return (
        <div className={styles.cita}>
            <div className={styles.info}>
                <div className={styles.inicial}>
                    N
                </div>
                <div className={styles.nombreAlumno}>
                    <p>Nombre Alumno</p>
                    <p>Fecha</p>
                </div>
            </div>
            <div className={styles.imagenAlumno}></div>
        </div>
    )
}