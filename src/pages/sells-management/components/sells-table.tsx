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

const SellsTable = () => {
  return (
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
                <Badge color={sale.status === "completed" ? "green" : "yellow"}>
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
  );
};

export { SellsTable };
