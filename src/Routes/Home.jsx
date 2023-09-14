import React, { useState, useContext, useEffect } from "react";
import Card from "../Components/Card";
//import { apiContext } from "../context/apiContext";
//import axios from 'axios'
const Home = () => {
  //let {dentistas, dispatch} = useContext(apiContext)
  const [dentistas, setDentistas] = useState([])
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data)
      setDentistas(data);
    };
    getTodos();
    /*fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        //dispatch({ type: "fetchApi", payload: data });
        console.log(data)
        setDentistas(data)
        console.log(dentistas)
      })
      .catch((error) => {
        //throw new Error(error)
        //dispatch({ type: "SET_ERROR", payload: error.message });
      });*/
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas && dentistas.map((dentista) => {
          return (<Card key= {dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>)
        })}
      </div>
    </>
  );
};

export default Home;
