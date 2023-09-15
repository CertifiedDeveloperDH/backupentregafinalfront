import { useContext } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { themeContext } from "../context/themeContext";
const CardDestacado = ({destacado}) => {
  let {theme} = useContext(themeContext)
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={{theme} = "light" ? `card` : `cardDark`}>
      <Link to={`/dentist/${destacado.id}`}>
        <img
          className="card-img-top"
          src="./images/doctor.jpg"
          alt="doctor placeholder"
        />
        <Link/>
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${destacado.id}`}>
          <h5 className={`card-title ${styles.title}`}>Id del dentista: {destacado.id}</h5>
          <h5 className={`card-title ${styles.title}`}>Nombre del dentista: {destacado.name}</h5>
          <h5 className={`card-title ${styles.title}`}>Usuario del dentista: {destacado.username}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDestacado;
