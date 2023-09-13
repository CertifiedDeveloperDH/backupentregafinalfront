import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { apiContext } from "../context/apiContext";

const Home = () => {
  let [listaDentistas, setDentistas] = useState([])
  let {dentistas} = useContext(apiContext)
  useEffect(() => {
    setDentistas(dentistas)
    console.log(listaDentistas)
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map((dentista) => {
          <Card key= {dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>
        })}
      </div>
    </>
  );
};

export default Home;
