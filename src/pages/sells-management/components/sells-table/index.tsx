import {
  Avatar,
  Button,
  Card,
  Group,
  Loader,
  Menu,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { useGetSell } from "./service";

const SellsTable = () => {
  const { data: sales, error, isSuccess, isError } = useGetSell();

  if (isError) {
    return <Text c="red">Error: {error.message}</Text>;
  }

  if (isSuccess) {
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
              <Table.Th align="right"></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {sales.map((sale) => (
              <Table.Tr key={sale.id}>
                <Table.Td>{sale.id}</Table.Td>
                <Table.Td>
                  <Group>
                    <Avatar src={""} radius="xl" />
                    <Text>{sale.customerId}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>{""}</Table.Td>
                <Table.Td>{sale.products.length}</Table.Td>
                <Table.Td>{sale.totalPrice}</Table.Td>
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
  }
  return (
    <Stack align="center" justify="center" py="xl">
      <Loader size="lg" color="green" />
      <Text>Cargando productos...</Text>
    </Stack>
  );
};

export { SellsTable };
