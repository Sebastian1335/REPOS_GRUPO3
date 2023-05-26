import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../TopBar/TopBar.module.css";

const TopBar = ({ onButtonClick }) => {
  const router = useRouter();

  const rolUsuario = localStorage.getItem("rolUsuario");
  const handleProfileClick = () => {
    if (rolUsuario === "profesor") {
      router.push("/PerfilDocente");
    } else if (rolUsuario === "estudiante") {
      router.push("/PerfilAlumno");
    } else {
      alert("Rol de usuario no válido");
    }
  };
  return (
    <div>
      <Navbar className={styles.NavbarStyle} expand="xxl">
        <button className={styles.Btn} onClick={onButtonClick}>
          <FaBars size={25} color="#684FA5" />
        </button>
        <Navbar.Brand href="#home">Atención de Citas</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <button className={styles.Btn} onClick={handleProfileClick}>
          <FaUserCircle size={25} color="#684FA5" />
        </button>
      </Navbar>
    </div>
  );
};

export default TopBar;
