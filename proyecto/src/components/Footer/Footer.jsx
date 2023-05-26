import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.footerLogo} src="../images/logo2.png" alt="Logo de la empresa"></img>
      <div className={styles.footerInfo}>
        Copyright © 2023 - Sistema de Registro de Citas
      </div>
    </div>
  );
};

export default Footer;
