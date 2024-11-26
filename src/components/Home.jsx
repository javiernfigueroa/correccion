import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./data/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{display:'grid',alignContent:'center', gridTemplateColumns:'auto auto auto'}}>
        {pizzas.map((pizza, key)=>{
          return <CardPizza
            key={key}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        })}       
      </div>
    </>
  );
};

export default Home;
