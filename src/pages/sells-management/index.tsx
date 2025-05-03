import {
  Box,
  Button,
  Container,
  Group,
  Tabs,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { StatsCards } from "../../components/stats-cards";
import { CreateFormModal } from "./components/create-form-sells";
import { SellsTable } from "./components/sells-table";

const stats = [
  {
    label: "Ventas completadas",
    value: "48",
    change: "+5.3%",
  },
  {
    label: "Ventas pendientes",
    value: "12",
    change: "+8.7%",
  },
  {
    label: "Ingresos",
    value: "$2,450",
    change: "+12.1%",
  },
  {
    label: "Ticket promedio",
    value: "$55",
    change: "+6.4%",
  },
];
const SellsManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de ventas</Title>
          <Button onClick={open}>Registrar venta</Button>
        </Group>

        <CreateFormModal opened={opened} close={close} />

        <StatsCards stats={stats} />
        <Group></Group>
        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todas</Tabs.Tab>
              <Tabs.Tab value="completed">Completadas</Tabs.Tab>
              <Tabs.Tab value="pending">Pendientes</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <TextInput placeholder="Buscar" />
        </Group>
        <SellsTable />
      </Container>
    </Box>
  );
};

export default SellsManagementPage;
