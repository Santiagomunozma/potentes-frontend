import {
  Box,
  Button,
  Container,
  Group,
  Tabs,
  TextInput,
  Title,
} from "@mantine/core";
import { IconTicket } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { CreateFormModal } from "./components/create-form-modal";
import { CouponsTable } from "./coupons-table";
import { StatsCards } from "../../components/stats-cards";

const stats = [
  {
    label: "Cupones activos",
    value: "12",
    change: "+2",
  },
  {
    label: "Cupones usados",
    value: "173",
    change: "+15.2",
  },
  {
    label: "Descuento promedio",
    value: "18%",
    change: "+3.1",
  },
  {
    label: "Conversion",
    value: "24%",
    change: "+6.4",
  },
];

const CouponsManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de Cupones</Title>
          <Button leftSection={<IconTicket size={16} />} onClick={open}>
            Crear Cupón
          </Button>
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
            <TextInput placeholder="Buscar cupón" />
          </Group>
        </Group>
        <CouponsTable />
      </Container>
    </Box>
  );
};

export { CouponsManagementPage };
