import React, { useEffect, useState } from 'react'
import { FaPizzaSlice, FaRegHandPointLeft } from 'react-icons/fa';
import { formatNumber } from '../components/funcionesJs';

const Pizza = () => {
    const [pizza, setPizza] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url="http://localhost:5000/api/pizzas/p001";

    useEffect(() => {
        const getData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            setError(error);
        }finally{
            setIsLoading(false);
        }
        };
        getData();
    }, []);
    
    return (
        <>
            {isLoading?(
                <h1>Cargando...</h1>
            ):error?(
                <h1>Error: {error.message}</h1>
            ):(
                <div className='grid justify-items-center pt-16'>
                    <div className="max-w-md rounded overflow-hidden">
                        <img className="w-full" src={pizza.img} alt={pizza.name}/>
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{pizza.name.toUpperCase()}</div>
                        <p style={{display:"flex"}} className="text-gray-700 text-base"><FaPizzaSlice/><span> Ingredientes:</span></p>
                        <ul className="list-disc">
                            {pizza.ingredients.map((ingredient, key)=>{
                                return <li key={key}>{ingredient}</li>
                            })}
                        </ul>
                        <p className="text-gray-700 text-base">Precio: ${formatNumber(pizza.price)}.-</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="inline-flex bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            type='button'>
                            <span>Volver</span> <FaRegHandPointLeft />
                        </button>
                        </div>
                    </div>
                </div>    
            )}
        </>  
                
    )
}

export default Pizza