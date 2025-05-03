import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Menu,
  Table,
  Text,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

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

const Userstable = () => {
  return (
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
  );
};

export { Userstable };
