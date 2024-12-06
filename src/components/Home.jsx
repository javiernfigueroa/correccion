import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const urlApi="http://localhost:5000/api/pizzas";
  useEffect(() => {
    const getData=async()=>{
      try {
        const response = await fetch(urlApi);
        const data = await response.json();
        setPizzas([...data])  
      } catch (error) {
        setError(error);
      }finally{
        setIsLoading(false);
      }     
    }
    getData();
    
  }, []);
  return (
    <>
      <Header />
      {isLoading?(
        <h1>Cargando...</h1>
      ):error?(
        <h1>Error: {error.message}</h1>
      ):(
        <div style={{display:'grid',alignContent:'center', gridTemplateColumns:'auto auto auto'}}>
          {pizzas.map((pizza, key)=>{
            return <CardPizza
              key={key}
              pizza={pizza}
            />
          })}        
        </div>
      )}
      
    </>
  );
};

export default Home;
