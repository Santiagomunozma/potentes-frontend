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
  Image,
  NumberInput,
  Select,
} from "@mantine/core";
import { IconDotsVertical, IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";

const products = [
  {
    name: "Hoodie Premium",
    sku: "HP-001",
    image: "https://placehold.co/100x100",
    stock: 25,
    price: "$59.99",
    status: "active",
  },
  {
    name: "Camiseta Urban",
    sku: "CU-002",
    image: "https://placehold.co/100x100",
    stock: 42,
    price: "$29.99",
    status: "active",
  },
  {
    name: "Gorra Potentes",
    sku: "GP-003",
    image: "https://placehold.co/100x100",
    stock: 0,
    price: "$24.99",
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

interface ProductFormData {
  name: string;
  sku: string;
  stock: number;
  price: number;
  status: string;
}

const ProductsManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      sku: "",
      stock: 0,
      price: 0,
      status: "active",
    },
  });

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
    close();
    reset();
  };

  const status = watch("status");

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de productos</Title>
          <Button onClick={open}>Agregar producto</Button>
        </Group>

        <Modal
          opened={opened}
          onClose={close}
          title="Agregar nuevo producto"
          centered
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <TextInput
                label="Nombre del producto"
                placeholder="Ingrese el nombre"
                error={errors.name?.message}
                {...register("name", {
                  required: "El nombre es requerido",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                })}
              />
              <TextInput
                label="SKU"
                placeholder="Ingrese el SKU"
                error={errors.sku?.message}
                {...register("sku", {
                  required: "El SKU es requerido",
                  minLength: {
                    value: 3,
                    message: "El SKU debe tener al menos 3 caracteres",
                  },
                })}
              />
              <NumberInput
                label="Stock"
                placeholder="Ingrese el stock"
                error={errors.stock?.message}
              />
              <NumberInput
                label="Precio"
                placeholder="Ingrese el precio"
                error={errors.price?.message}
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
                <Button type="submit">Agregar producto</Button>
              </Group>
            </Stack>
          </form>
        </Modal>

        <Grid mb="lg">
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Productos activos" value="48" change="+5.3%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Productos nuevos" value="12" change="+8.7%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Sin stock" value="7" change="-2.1%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Total productos" value="55" change="+6.4%" />
          </Grid.Col>
        </Grid>

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todos</Tabs.Tab>
              <Tabs.Tab value="clothing">Ropa</Tabs.Tab>
              <Tabs.Tab value="accessories">Accesorios</Tabs.Tab>
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
                <Table.Th>Producto</Table.Th>
                <Table.Th>SKU</Table.Th>
                <Table.Th>Stock</Table.Th>
                <Table.Th>Precio</Table.Th>
                <Table.Th>Estado</Table.Th>
                <Table.Th align="right"></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {products.map((product) => (
                <Table.Tr key={product.sku}>
                  <Table.Td>
                    <Group>
                      <Image
                        src={product.image}
                        width={40}
                        height={40}
                        radius="sm"
                      />
                      <Text>{product.name}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>{product.sku}</Table.Td>
                  <Table.Td>{product.stock}</Table.Td>
                  <Table.Td>{product.price}</Table.Td>
                  <Table.Td>
                    <Badge
                      color={product.status === "active" ? "green" : "red"}
                    >
                      {product.status === "active" ? "Disponible" : "Agotado"}
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

export default ProductsManagementPage;
