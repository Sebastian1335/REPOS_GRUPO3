import Link from "next/link"
import styles from "../Menu/Menu.module.css"

const Menu = () => {
  return (
    <div>
      <div className={styles.Sidebar}>
        <Link href="/">Principal</Link>
        <Link href="/perfil">Perfil</Link>
        <Link href="/horarios">Horarios</Link>
      </div>
    </div>
  );
}

export default Menu;