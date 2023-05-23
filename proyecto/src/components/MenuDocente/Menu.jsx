import Link from "next/link"
import styles from "../MenuDocente/Menu.module.css"

const Menu = () => {
  return (
    <div>
      <div className={styles.Sidebar}>
        <Link href="/">Principal</Link>
        <Link href="/perfil">Perfil</Link>
        <Link href="/Horarios">Horarios</Link>
      </div>
    </div>
  );
}

export default Menu;