import { useEffect, useState } from "react";
import CardDestacado from "../Components/CardDestacado.jsx"

const Favs = () => {
  const [destacados, setDestacados] = useState([])
  useEffect(() => {
    if(!localStorage.getItem("destacados")){
      setDestacados([])
    }else {
      setDestacados(localStorage.getItem("destacados"))
    }
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid container">
        {destacados.map((destacado) => {
          <CardDestacado key={destacado.id} destacado={destacado}/>
        })}
      </div>
    </>
  );
};

export default Favs;
