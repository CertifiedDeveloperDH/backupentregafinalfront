import { useContext } from "react";
import styles from "./Card.module.css";
import { Link
 } from "react-router-dom";
import { themeContext } from "../context/themeContext";
import { localstorageContext } from "../context/localstorageContext";
const Card = ({id, name, username}) => {
  let {theme} = useContext(themeContext)
  let {addFav} = useContext(localstorageContext)
  return (
    <>
      <div className={`card text-bg-${theme}`}>
        <img
          className="card-img-top"
          src="./public/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/dentist/${dentista.id}`}>
            <h5 className={`card-title ${styles.title}`}>Nombre: {name}</h5>
            <h5 className={`card-title ${styles.title}`}>Usuario: {username}</h5>
          </Link>
        </div>
        <button type="button" className= {`btn btn-${theme} ${styles.favButton}`} onClick={addFav(id)}>Add fav</button>
      </div>
    </>
  );
};

export default Card;
