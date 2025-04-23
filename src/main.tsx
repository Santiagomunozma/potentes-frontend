import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./components/providers.tsx";
import { CartProvider } from "./pages/cart/CartContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Providers />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
