import styles from '../Horario/Horario.module.css'

export default function Horario() {
    return (
        <div className={styles.contenedor}>
            <div className={styles.info}>
                <div className={styles.id}>
                    <p>id</p>
                </div>
                <div className={styles.HorEleg}>
                    <p>Horario elegido</p>
                </div>
            </div>
        </div>
    )
}