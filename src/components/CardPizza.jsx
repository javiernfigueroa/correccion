import React from "react";
import { FaPizzaSlice, FaCartArrowDown  } from "react-icons/fa6";
import { MdReadMore } from "react-icons/md";
import {formatNumber} from './funcionesJs.js'

const CardPizza = ({ name, price, ingredients, img }) => {
  /* var ingredientes = "";
  ingredients.forEach((ingredient, index) => {
    ingredientes += index === 0 ? `${ingredient}` : `, ${ingredient}`;
  }); */
  const priceFormat = formatNumber(price);
  return (
    <div style={{margin:"0.5em 0.5em 0.5em 0.5em"}} className="max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt={name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p style={{display:"flex"}} className="text-gray-700 text-base"><FaPizzaSlice/><span> Ingredientes:</span></p>
        <ul className="list-disc">
            {ingredients.map((ingredient, key)=>{
              return <li key={key}>{ingredient}</li>
            })}
        </ul>
        <p className="text-gray-700 text-base">Precio: ${priceFormat}.-</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="inline-flex bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <span>Ver mas</span> <MdReadMore/>
        </button>
        <button className="inline-flex bg-green-100 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
          <span>Agregar</span> <FaCartArrowDown/>
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
