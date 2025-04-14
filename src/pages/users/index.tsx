import {
  Avatar,
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
  Select,
} from "@mantine/core";
import { IconDotsVertical, IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";

interface UserFormData {
  name: string;
  email: string;
  status: string;
}

const users = [
  {
    name: "Robert Fox",
    email: "robertfox@com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    history: 25,
    status: "active",
  },
  {
    name: "Kristin Watson",
    email: "kristiwatson24@com",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    history: 25,
    status: "active",
  },
  {
    name: "Devon Lane",
    email: "devonlane348@com",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    history: 25,
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

const UsersPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<UserFormData>({
    defaultValues: {
      name: "",
      email: "",
      status: "active",
    },
  });

  const onSubmit = (data: UserFormData) => {
    console.log(data);
    close();
    reset();
  };

  const status = watch("status");

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de usuarios</Title>
          <Button onClick={open}>Agregar usuario</Button>
        </Group>

        <Modal
          opened={opened}
          onClose={close}
          title="Crear nuevo usuario"
          centered
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <TextInput
                label="Nombre"
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
                label="Email"
                placeholder="Ingrese el email"
                error={errors.email?.message}
                {...register("email", {
                  required: "El email es requerido",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Email inválido",
                  },
                })}
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
                <Button type="submit">Crear usuario</Button>
              </Group>
            </Stack>
          </form>
        </Modal>

        <Grid mb="lg">
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Usuarios activos" value="1,248" change="+12.3%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Usuarios nuevos" value="156" change="+8.7%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Usuarios inactivos" value="324" change="-5.2%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Total usuarios" value="1,572" change="+9.4%" />
          </Grid.Col>
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

        <Card withBorder shadow="none" bg="white">
          <Table highlightOnHover verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Nombre</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Compras</Table.Th>
                <Table.Th>Estado</Table.Th>
                <Table.Th align="right"></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {users.map((user) => (
                <Table.Tr key={user.email}>
                  <Table.Td>
                    <Group>
                      <Avatar src={user.avatar} radius="xl" />
                      <Text>{user.name}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>{user.email}</Table.Td>
                  <Table.Td>{user.history}</Table.Td>
                  <Table.Td>
                    <Badge color={user.status === "active" ? "green" : "red"}>
                      {user.status === "active" ? "Activo" : "Inactivo"}
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

export default UsersPage;
