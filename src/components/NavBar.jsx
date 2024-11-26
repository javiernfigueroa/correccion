import React from "react";
import {
  GiKeyLock,
  GiCombinationLock,
  GiPizzaSlice,
  GiShoppingCart,
} from "react-icons/gi";
import { GrLogin, GrLogout } from "react-icons/gr";
import {
  Disclosure
} from "@headlessui/react";
import { formatNumber } from "./funcionesJs.js";

const total = formatNumber(25000);
const token = false;
const navigation = [
  {
    name: "Pizzeria Mamma Mia!",
    href: "#",
    current: true,
    icon: "",
  },
  {
    name: "Home",
    href: "#",
    current: false,
    icon: <GiPizzaSlice size={"2em"} color="yellow" />,
  },
  {
    name: token ? "Logout" : "Register",
    href: "#",
    current: false,
    icon: token ? (
      <GrLogout size={"2em"} color="yellow" />
    ) : (
      <GiCombinationLock size={"2em"} color="yellow" />
    ),
  },
  {
    name: token ? "Profile" : "Login",
    href: "#",
    current: false,
    icon: token ? (
      <GiKeyLock size={"2em"} color="yellow" />
    ) : (
      <GrLogin size={"2em"} color="yellow" />
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (                  
                    <a
                      style={{ display: "flex" }}
                      key={index}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {index > 0 ? item.icon : ""}
                      <span>{item.name}</span>
                    </a>                  
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="inline-flex relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <GiShoppingCart size={"2em"} color="yellow" />
              <span>${total}.-</span>
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default NavBar;
