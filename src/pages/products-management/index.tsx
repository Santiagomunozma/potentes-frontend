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
import { CreateFormModal } from "./components/create-form-modal";
import { ProductsTable } from "./components/products-table";
import { StatsCards } from "../../components/stats-cards";

const stats = [
  {
    label: "Productos activos",
    value: "48",
    change: "+5.3%",
  },
  {
    label: "Productos nuevos",
    value: "12",
    change: "+8.7%",
  },
  {
    label: "Sin stock",
    value: "7",
    change: "-2.1%",
  },
  {
    label: "Total productos",
    value: "55",
    change: "+6.4%",
  },
];

const ProductsManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de productos</Title>
          <Button onClick={open}>Agregar producto</Button>
        </Group>

        <CreateFormModal opened={opened} close={close} />

        <StatsCards stats={stats} />

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todos</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Buscar" />
          </Group>
        </Group>
        <ProductsTable />
      </Container>
    </Box>
  );
};

export default ProductsManagementPage;
