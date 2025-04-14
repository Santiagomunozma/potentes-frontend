import { AppShell, NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";

const Navbar = () => (
  <AppShell.Navbar py="md" px={4}>
    <NavLink
      href="#required-for-focus"
      label="Home"
      leftSection={<IconHome2 stroke={1} />}
      variant="subtle"
      active
    />
  </AppShell.Navbar>
);

export { Navbar };
