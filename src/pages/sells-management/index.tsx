import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Menu,
  Modal,
  Stack,
  Table,
  Tabs,
  Text,
  TextInput,
  Title,
  Avatar,
  NumberInput,
  Select,
} from "@mantine/core";
import { IconDotsVertical, IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";

const sales = [
  {
    id: "VTA-001",
    customer: {
      name: "Robert Fox",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    date: "15/05/2023",
    amount: "$159.99",
    items: 3,
    status: "completed",
  },
  {
    id: "VTA-002",
    customer: {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    date: "12/05/2023",
    amount: "$89.97",
    items: 2,
    status: "completed",
  },
  {
    id: "VTA-003",
    customer: {
      name: "Devon Lane",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    date: "10/05/2023",
    amount: "$24.99",
    items: 1,
    status: "pending",
  },
];

const StatCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => (
  <Card withBorder radius="md" padding="lg" shadow="none" bg="white">
    <Stack gap={2}>
      <Text size="xs" c="dimmed">
        {label}
      </Text>
      <Title order={3}>{value}</Title>
      <Text size="xs" c={change.includes("+") ? "green" : "red"}>
        {change} desde el mes pasado
      </Text>
    </Stack>
  </Card>
);

interface SaleFormData {
  customerName: string;
  amount: number;
  items: number;
  status: string;
}

const SellsManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SaleFormData>({
    defaultValues: {
      customerName: "",
      amount: 0,
      items: 1,
      status: "pending",
    },
  });

  const onSubmit = (data: SaleFormData) => {
    console.log(data);
    close();
    reset();
  };

  const status = watch("status");

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de ventas</Title>
          <Button onClick={open}>Registrar venta</Button>
        </Group>

        <Modal
          opened={opened}
          onClose={close}
          title="Registrar nueva venta"
          centered
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <TextInput
                label="Nombre del cliente"
                placeholder="Ingrese el nombre del cliente"
                error={errors.customerName?.message}
                {...register("customerName", {
                  required: "El nombre del cliente es requerido",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                })}
              />
              <NumberInput
                label="Cantidad de productos"
                placeholder="Ingrese la cantidad"
              />
              <NumberInput
                label="Monto total"
                placeholder="Ingrese el monto"
                error={errors.amount?.message}
              />
              <Select
                label="Estado"
                placeholder="Seleccione el estado"
                value={status}
                onChange={(value) => setValue("status", value || "pending")}
                data={[
                  { value: "completed", label: "Completada" },
                  { value: "pending", label: "Pendiente" },
                ]}
              />
              <Group justify="flex-end" mt="md">
                <Button variant="default" onClick={close}>
                  Cancelar
                </Button>
                <Button type="submit">Registrar venta</Button>
              </Group>
            </Stack>
          </form>
        </Modal>

        <Grid mb="lg">
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Ventas completadas" value="48" change="+5.3%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Ventas pendientes" value="12" change="+8.7%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Ingresos" value="$2,450" change="+12.1%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Ticket promedio" value="$55" change="+6.4%" />
          </Grid.Col>
        </Grid>

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todas</Tabs.Tab>
              <Tabs.Tab value="completed">Completadas</Tabs.Tab>
              <Tabs.Tab value="pending">Pendientes</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Buscar" />
            <Button variant="outline" leftSection={<IconDownload size={16} />}>
              Exportar
            </Button>
          </Group>
        </Group>

        <Card withBorder shadow="none" bg="white">
          <Table highlightOnHover verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Cliente</Table.Th>
                <Table.Th>Fecha</Table.Th>
                <Table.Th>Productos</Table.Th>
                <Table.Th>Total</Table.Th>
                <Table.Th>Estado</Table.Th>
                <Table.Th align="right"></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {sales.map((sale) => (
                <Table.Tr key={sale.id}>
                  <Table.Td>{sale.id}</Table.Td>
                  <Table.Td>
                    <Group>
                      <Avatar src={sale.customer.avatar} radius="xl" />
                      <Text>{sale.customer.name}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>{sale.date}</Table.Td>
                  <Table.Td>{sale.items}</Table.Td>
                  <Table.Td>{sale.amount}</Table.Td>
                  <Table.Td>
                    <Badge
                      color={sale.status === "completed" ? "green" : "yellow"}
                    >
                      {sale.status === "completed" ? "Completada" : "Pendiente"}
                    </Badge>
                  </Table.Td>
                  <Table.Td align="right">
                    <Menu shadow="md" position="bottom-end" withArrow>
                      <Menu.Target>
                        <Button variant="subtle" size="xs" px={6}>
                          <IconDotsVertical size={16} />
                        </Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Detalles</Menu.Item>
                        <Menu.Item>Factura</Menu.Item>
                        <Menu.Item color="red">Anular</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      </Container>
    </Box>
  );
};

export default SellsManagementPage;
