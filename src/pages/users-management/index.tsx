import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Tabs,
  TextInput,
  Title,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { CreateFormModal } from "./components/create-form-users";
import { Userstable } from "./users-table";
import { StatsCards } from "../../components/stats-cards";

const stats = [
  {
    label: "Usuarios activos",
    value: "1,248",
    change: "+12.3%",
  },
  {
    label: "Usuarios nuevos",
    value: "156",
    change: "+8.7%",
  },
  {
    label: "Usuarios inactivos",
    value: "324",
    change: "-5.2%",
  },
  {
    label: "Total usuarios",
    value: "1,572",
    change: "+9.4%",
  },
];

const UsersPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de usuarios</Title>
          <Button onClick={open}>Agregar usuario</Button>
        </Group>

        <CreateFormModal opened={opened} close={close} />

        <Grid mb="lg">
          <StatsCards stats={stats} />
        </Grid>

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="clients">
            <Tabs.List>
              <Tabs.Tab value="clients">Clientes</Tabs.Tab>
              <Tabs.Tab value="providers">Empleados</Tabs.Tab>
              <Tabs.Tab value="request">Administradores</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Search" />
            <Button variant="outline" leftSection={<IconDownload size={16} />}>
              Download
            </Button>
          </Group>
        </Group>
        <Userstable />
      </Container>
    </Box>
  );
};

export default UsersPage;
