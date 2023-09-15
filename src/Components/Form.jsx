import { useContext, useState } from "react";
import styles from "./Form.module.css";
import { themeContext } from "../context/themeContext";

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    let {theme} = useContext(themeContext)
    const validarNombre = (nombre) => {
        let sinEspacios = nombre.trim()
        if (sinEspacios.length > 5){
            return true
        }
        return false
    }
    const validarEmail = (email) => {
        const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        return regex.test(email)
    }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validarNombre(nombre) || !validarEmail(email)){
        alert("Por favor verifique su información nuevamente")
    } else{
        alert(`Gracias ${nombre}, te contactaremos cuanto antes vía mail`)
    }
  };

  return (
    <>
      <div
        className={`text-center card container ${{theme} = "light" ? styles.card : styles.cardDark}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nombre Completo"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
          <Mensaje success={success} nombre={nombre} submited={submited}/>
        </div>
      </div>
    </>
  );
};

export default Form;
