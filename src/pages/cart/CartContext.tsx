import React, { createContext, useContext, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  subtotal: number;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialCart: CartItem[] = [
  {
    id: "1",
    name: "Hoodie Oversized",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 180000,
    quantity: 1,
  },
  {
    id: "2",
    name: "Pantalón Cargo Street",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 145000,
    quantity: 1,
  },
];

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, subtotal, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
