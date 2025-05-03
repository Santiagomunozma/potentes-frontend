import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "../app/routes";
import { shadcnCssVariableResolver } from "../../cssVariableResolver";
import { shadcnTheme } from "../../theme";

import "../assets/styles/style.css";
import { CartProvider } from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <MantineProvider
        theme={shadcnTheme}
        cssVariablesResolver={shadcnCssVariableResolver}
      >
        <Notifications />
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export { Providers };
