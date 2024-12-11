import React from "react";
import { FaPizzaSlice, FaCartArrowDown  } from "react-icons/fa6";
import { MdReadMore } from "react-icons/md";
import {formatNumber} from './funcionesJs.js'
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const priceFormat = formatNumber(pizza.price);
  return (
    <div style={{margin:"0.5em 0.5em 0.5em 0.5em"}} className="max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src={pizza.img} alt={pizza.name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pizza.name}</div>
        <p style={{display:"flex"}} className="text-gray-700 text-base"><FaPizzaSlice/><span> Ingredientes:</span></p>
        <ul className="list-disc">
            {pizza.ingredients.map((ingredient, key)=>{
              return <li key={key}>{ingredient}</li>
            })}
        </ul>
        <p className="text-gray-700 text-base">Precio: ${priceFormat}.-</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/pizza/${pizza.id}`} className="inline-flex bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <span>Ver mas</span> <MdReadMore/>
        </Link>
        <button className="inline-flex bg-green-100 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
          <span>Agregar</span> <FaCartArrowDown/>
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
