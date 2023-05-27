import Link from "next/link"
import styles from "../MenuDocente/Menu.module.css"

const Menu = () => {
  return (
    <div>
      <div className={styles.Sidebar}>
        <Link href="/">Principal</Link>
        <Link href="/Perfil-Docente">Perfil</Link>
        <Link href="/AgregarHorarios">Horarios</Link>
        <Link href="/ResumenCalificaciones">Calificaciones</Link>
      </div>
    </div>
  );
}

export default Menu;