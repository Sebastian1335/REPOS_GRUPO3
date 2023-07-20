import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import styles from "../TopBarInicio/TopBar.module.css";

const TopBar = () => {
  return (
    <div>
      <Navbar className={styles.NavbarStyle} expand="xxl">
        <div>
          <Navbar.Brand href="#home">
            <img className={styles.logo} src="../images/logo.png"></img>
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link className={styles.item} href="/Registro">Registrarse</Link>
          <Link className={styles.item} href="/Login">Iniciar Sesión</Link>
        </div>
      </Navbar>
    </div>
  );
};

export default TopBar;
