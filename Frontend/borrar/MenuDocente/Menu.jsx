import Link from "next/link"
//import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <div>
      <div className={styles.Sidebar}>
        <Link href="/DocentePrincipal">Principal</Link>
        <Link href="/Perfil-Docente">Perfil</Link>
        <Link href="/AgregarHorarios">Horarios</Link>
        <Link href="/ResumenCalificaciones">Calificaciones</Link>
        <Link href="/">Cerrar sesión</Link>
      </div>
    </div>
  );
}

export default Menu;