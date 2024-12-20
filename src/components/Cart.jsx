import React, { useContext } from "react";
import { formatNumber } from "./funcionesJs.js";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/CartContext.jsx";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const sumarPizza = (key) => {
        const updatedCart = cart.map((pizza, index) =>
            index === key ? { ...pizza, count: pizza.count + 1 } : pizza
        );
        setCart(updatedCart);
    };

    const restarPizza = (key) => {
        const updatedCart = cart
            .map((pizza, index) =>
                index === key
                    ? { ...pizza, count: pizza.count > 1 ? pizza.count - 1 : 0 }
                    : pizza
            )
            .filter((pizza) => pizza.count > 0);

        setCart(updatedCart);
    };

    const calculaTotal = () =>
        cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

    return (
        <div className="grid justify-items-center border-solid border-4">
            <div className="w-2/4 px-4 py-6 sm:px-6">
                <h2 className="text-lg font-medium text-center bg-orange-300 text-gray-900">
                    Carrito de compras
                </h2>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">
                        El carrito está vacío.
                    </p>
                ) : (
                    <ul role="list" className="divide-y divide-gray-200">
                        {cart.map((pizza, key) => (
                            <li className="flex" key={key}>
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={pizza.img}
                                        alt={pizza.name}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{pizza.name.toUpperCase()}</h3>
                                            <p className="ml-4">
                                                ${formatNumber(pizza.price)}.-
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-lg">
                                        <p className="text-gray-500">
                                            Cantidad {pizza.count}
                                        </p>
                                        <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() => sumarPizza(key)}
                                        >
                                            <FaPlus />
                                        </button>
                                        <button
                                            type="button"
                                            className="font-lg text-indigo-600 hover:text-indigo-500"
                                            onClick={() => restarPizza(key)}
                                        >
                                            {pizza.count !== 1 ? (
                                                <FaMinus />
                                            ) : (
                                                <FaTrashAlt />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="border-t border-gray-200 w-2/4 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${formatNumber(calculaTotal())}.-</p>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Pagar
                        <span aria-hidden="true"> &rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
