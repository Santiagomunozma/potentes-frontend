import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Menu,
  Table,
  Text,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

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

const ProductsTable = () => {
  return (
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
                <Badge color={product.status === "active" ? "green" : "red"}>
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
  );
};

export { ProductsTable };
