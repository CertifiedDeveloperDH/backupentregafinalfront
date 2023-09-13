import { useContext } from "react";
import styles from "./Footer.module.css";
import { themeContext } from "../context/themeContext";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  let {theme} = useContext(themeContext)
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Volver arriba</button>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div className={`navbar-${theme} bg-${theme}} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                <img className={`${styles.dhLogo}`} src="./public/images/DH.png" alt='DH-logo' />
              </div>
              <div className={`col-sm-12 col-lg-6 ${styles.icons}`}>
                <img src="./public/images/ico-facebook.png" alt="ícone do facebook" className={styles.icon} />
                <img src=".public//images/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
                <img src="./public/images/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
                <img src="./public/images/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer