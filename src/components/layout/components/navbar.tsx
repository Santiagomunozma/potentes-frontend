import { AppShell, NavLink } from "@mantine/core";
import {
  IconGauge,
  IconHanger,
  IconHome2,
  IconInfoCircle,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

const Navbar = () => (
  <AppShell.Navbar py="md" px={4}>
    <NavLink
      component={Link}
      href="/"
      label="Incio"
      leftSection={<IconHome2 stroke={1} />}
      variant="subtle"
      active
    />

    <NavLink
      component={Link}
      href="/products"
      label="Productos"
      leftSection={<IconHanger stroke={1} />}
      variant="subtle"
    />

    <NavLink
      component={Link}
      href="/about"
      label="Nosotros"
      leftSection={<IconInfoCircle stroke={1} />}
      variant="subtle"
    />

    <NavLink
      label="Admin"
      leftSection={<IconGauge stroke={1} />}
      childrenOffset={28}
    >
      <NavLink component={Link} label="Usuarios" href="/users" />
      <NavLink component={Link} label="Productos" href="/products-management" />
      <NavLink component={Link} label="Ventas" href="/sells-management" />
      <NavLink component={Link} label="Cupones" href="/coupons" />
    </NavLink>
  </AppShell.Navbar>
);

export { Navbar };
