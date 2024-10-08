import { createContext, useState } from "react";
import { food_list, assets } from "../assets/Assets/assets"; // Update the path accordingly

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // State to manage items in the cart

  const handleAddToCart = (ItemId) => {
    if (!cart[ItemId]) {
      setCart((prev) => ({ ...prev, [ItemId]: 1 }));
    } else {
      setCart((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    }
  };

  const handleRemoveFromCart = (ItemId) => {
    setCart((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
  let [isLogged, setIsLogged] = useState({
    isLogged: false, // Update this value to reflect your login status
    user: "",
  });

  let obj = {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart,
    food_list,
    assets,
    isLogged,
    setIsLogged,
  };
  return (
    <RouterContext.Provider value={obj}>{children}</RouterContext.Provider>
  );
};
