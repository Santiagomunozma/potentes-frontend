import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "../app/routes";
import { shadcnCssVariableResolver } from "../../cssVariableResolver";
import { shadcnTheme } from "../../theme";

import "../assets/styles/style.css";
import { CartProvider } from "../store";
const Providers = () => {
  return (
    <MantineProvider
      theme={shadcnTheme}
      cssVariablesResolver={shadcnCssVariableResolver}
    >
      <Notifications />
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </MantineProvider>
  );
};

export { Providers };
