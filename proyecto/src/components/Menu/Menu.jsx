import Link from "next/link"
import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <div>
      <div className={styles.Sidebar}>
        {window.localStorage.getItem("rol")==="profesor"?
          <div>
            <Link href="/DocentePrincipal">Principal</Link>
            <Link href="/Perfil-Docente">Perfil</Link>
            <Link href="/AgregarHorarios">Horarios</Link>
            <Link href="/ResumenCalificaciones">Calificaciones</Link>
          </div>
        :
          <div>
            <Link href="/AlumnoPrincipal">Principal</Link>
            <Link href="/Perfil-Alumno">Perfil</Link>
            <Link href="/CitasAlumnos">Citas</Link>
          </div>
        }
        <Link onClick={() => window.localStorage.setItem("recargar", "true")} href="/Login">Cerrar sesión</Link>
      </div>
    </div>
  );
}

export default Menu;