import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

export const PizzaContext = createContext(); 

const PizzaProvider = ({children}) => {
    
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const urlApi="http://localhost:5000/api/pizzas";
    useEffect(() => {
        setIsLoading(false);
        const getData=async()=>{
            try {
                const response = await axios.get(urlApi);
                const data = response.data;
                setPizzas([...data]);
            } catch (error) {
                setError(error);
            }finally{
                setIsLoading(false);
            }    
        }
        getData();
    
    }, []);
    return (
        <PizzaContext.Provider value={{pizzas, isLoading, error}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider