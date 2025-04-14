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
  NumberInput,
  Select,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconDownload,
  IconTicket,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";

const coupons = [
  {
    id: "CPN-001",
    code: "VERANO2023",
    discount: "20%",
    startDate: "01/06/2023",
    endDate: "31/08/2023",
    usageCount: 45,
    status: "active",
  },
  {
    id: "CPN-002",
    code: "BIENVENIDA",
    discount: "15%",
    startDate: "01/01/2023",
    endDate: "31/12/2023",
    usageCount: 128,
    status: "active",
  },
  {
    id: "CPN-003",
    code: "BLACKFRIDAY",
    discount: "30%",
    startDate: "24/11/2023",
    endDate: "27/11/2023",
    usageCount: 0,
    status: "inactive",
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

interface CouponFormData {
  code: string;
  discount: number;
  startDate: string;
  endDate: string;
  status: string;
}

const CuponesPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CouponFormData>({
    defaultValues: {
      code: "",
      discount: 0,
      startDate: "",
      endDate: "",
      status: "active",
    },
  });

  const onSubmit = (data: CouponFormData) => {
    console.log(data);
    close();
    reset();
  };

  const status = watch("status");

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de Cupones</Title>
          <Button leftSection={<IconTicket size={16} />} onClick={open}>
            Crear Cupón
          </Button>
        </Group>

        <Modal
          opened={opened}
          onClose={close}
          title="Crear nuevo cupón"
          centered
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <TextInput
                label="Código del cupón"
                placeholder="Ingrese el código"
                error={errors.code?.message}
                {...register("code", {
                  required: "El código es requerido",
                  minLength: {
                    value: 3,
                    message: "El código debe tener al menos 3 caracteres",
                  },
                })}
              />
              <NumberInput
                label="Descuento (%)"
                placeholder="Ingrese el porcentaje de descuento"
                error={errors.discount?.message}
              />
              <TextInput
                label="Fecha de inicio"
                type="date"
                error={errors.startDate?.message}
                {...register("startDate", {
                  required: "La fecha de inicio es requerida",
                })}
              />
              <TextInput
                label="Fecha de fin"
                type="date"
                error={errors.endDate?.message}
              />
              <Select
                label="Estado"
                placeholder="Seleccione el estado"
                value={status}
                onChange={(value) => setValue("status", value || "active")}
                data={[
                  { value: "active", label: "Activo" },
                  { value: "inactive", label: "Inactivo" },
                ]}
              />
              <Group justify="flex-end" mt="md">
                <Button variant="default" onClick={close}>
                  Cancelar
                </Button>
                <Button type="submit">Crear cupón</Button>
              </Group>
            </Stack>
          </form>
        </Modal>

        <Grid mb="lg">
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Cupones activos" value="12" change="+2" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Cupones usados" value="173" change="+15.2%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Descuento promedio" value="18%" change="+3.1%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Conversión" value="24%" change="+6.4%" />
          </Grid.Col>
        </Grid>

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todos</Tabs.Tab>
              <Tabs.Tab value="active">Activos</Tabs.Tab>
              <Tabs.Tab value="inactive">Inactivos</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Buscar cupón" />
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
                <Table.Th>Código</Table.Th>
                <Table.Th>Descuento</Table.Th>
                <Table.Th>Fecha inicio</Table.Th>
                <Table.Th>Fecha fin</Table.Th>
                <Table.Th>Usos</Table.Th>
                <Table.Th>Estado</Table.Th>
                <Table.Th align="right"></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {coupons.map((coupon) => (
                <Table.Tr key={coupon.id}>
                  <Table.Td>{coupon.id}</Table.Td>
                  <Table.Td>
                    <Text fw={500}>{coupon.code}</Text>
                  </Table.Td>
                  <Table.Td>{coupon.discount}</Table.Td>
                  <Table.Td>{coupon.startDate}</Table.Td>
                  <Table.Td>{coupon.endDate}</Table.Td>
                  <Table.Td>{coupon.usageCount}</Table.Td>
                  <Table.Td>
                    <Badge
                      color={coupon.status === "active" ? "green" : "gray"}
                    >
                      {coupon.status === "active" ? "Activo" : "Inactivo"}
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
                        <Menu.Item>Editar</Menu.Item>
                        <Menu.Item color="red">Eliminar</Menu.Item>
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

export { CuponesPage };
