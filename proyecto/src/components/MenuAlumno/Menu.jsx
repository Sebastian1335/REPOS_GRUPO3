import Link from "next/link"
import styles from "../MenuDocente/Menu.module.css"

const Menu = () => {
  return (
    <div>
      <div className={styles.Sidebar}>
        <Link href="/AlumnoPrincipal">Principal</Link>
        <Link href="/Perfil-Alumno">Perfil</Link>
        <Link href="/CitasAlumnos">Citas</Link>
        <Link href="/">Cerrar sesión</Link>
      </div>
    </div>
  );
}

export default Menu;