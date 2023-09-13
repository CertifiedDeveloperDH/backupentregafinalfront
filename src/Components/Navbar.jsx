import { useContext, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { themeContext } from "../context/themeContext";
const Navbar = () => {
  let {theme, changeTheme} = useContext(themeContext)
  
  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/contact">
                  Contacto
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/favs">
                  Destacados
                </Link>
              </li>
              <li className={`nav-item`}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn btn-${theme} ${styles.btnStyle
                    }`}
                    onClick={changeTheme}
                >
                  {theme = "light" ? (<>🌙</>):(<>☀</>)}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
