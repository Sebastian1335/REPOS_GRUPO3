import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle, FaBars } from "react-icons/fa";
import Link from "next/link"
import styles from "../TopBar/TopBar.module.css"

const TopBar = ({onButtonClick}) => {
  return (
    <div>
      <Navbar className={styles.NavbarStyle} expand="xxl">
          <button className={styles.Btn} onClick={onButtonClick}>
            <FaBars size={25} color="#684FA5"/>
          </button>
          <Navbar.Brand href="#home">Atención de Citas</Navbar.Brand>         
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link href="/perfil">
            <FaUserCircle size={25} color="#684FA5"/>
          </Link>     
      </Navbar>
    </div>
  );
}

export default TopBar;