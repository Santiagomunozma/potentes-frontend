import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Group,
  Indicator,
  Menu,
  Stack,
  Title,
} from "@mantine/core";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

const Header = ({ opened, toggle }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigation = (to: string) => {
    navigate({ to });
    window.scrollTo(0, 0);
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color="primary"
        />
        <Stack gap={0} align="center">
          <Title order={6} fw={400}>
            LOS
          </Title>
          <Title order={4} lh={1}>
            P O T E N T E S
          </Title>
        </Stack>
        <Group justify="center" style={{ flex: 1 }} visibleFrom="sm">
          <Group ml="xl" gap={0}>
            <Button
              variant="subtle"
              fw={400}
              onClick={() => handleNavigation("/")}
            >
              Inicio
            </Button>
            <Button
              variant="subtle"
              fw={400}
              onClick={() => handleNavigation("/products")}
            >
              Productos
            </Button>
            <Button
              variant="subtle"
              fw={400}
              onClick={() => handleNavigation("/about")}
            >
              Nosotros
            </Button>
            <Menu shadow="md" position="bottom-end" withArrow>
              <Menu.Target>
                <Button variant="subtle" fw={400}>
                  Admin
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => handleNavigation("/users")}>
                  Usuarios
                </Menu.Item>
                <Menu.Item
                  onClick={() => handleNavigation("/products-management")}
                >
                  Productos
                </Menu.Item>
                <Menu.Item
                  onClick={() => handleNavigation("/sells-management")}
                >
                  Ventas
                </Menu.Item>
                <Menu.Item onClick={() => handleNavigation("/coupons")}>
                  Cupones
                </Menu.Item>
                <Menu.Item onClick={() => handleNavigation("/sizes")}>
                  Tallas
                </Menu.Item>
                <Menu.Item onClick={() => handleNavigation("/colors")}>
                  Colores
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
        <Group>
          <ActionIcon
            variant="subtle"
            size="lg"
            radius="xl"
            onClick={() => handleNavigation("/login")}
          >
            <IconUser stroke={1} />
          </ActionIcon>
          <Indicator label={5} size={20} color="primary" disabled>
            <ActionIcon
              variant="subtle"
              size="lg"
              radius="xl"
              onClick={() => handleNavigation("/cart")}
            >
              <IconShoppingCart stroke={1} />
            </ActionIcon>
          </Indicator>
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export { Header };
