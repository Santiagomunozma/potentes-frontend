import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Image,
  NumberInput,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const initialCart = [
  {
    id: "1",
    name: "Hoodie Oversized",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 180000,
    quantity: 1,
  },
  {
    id: "2",
    name: "Pantalón Cargo Street",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 145000,
    quantity: 2,
  },
];

const CartView = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box py="xl">
      <Container>
        <Title order={2} mb="lg">
          Carrito de Compras
        </Title>

        {cart.length === 0 ? (
          <Text c="dimmed">Tu carrito está vacío.</Text>
        ) : (
          <>
            <Table verticalSpacing="md" striped withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Producto</Table.Th>
                  <Table.Th>Precio</Table.Th>
                  <Table.Th>Cantidad</Table.Th>
                  <Table.Th>Total</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {cart.map((item) => (
                  <Table.Tr key={item.id}>
                    <Table.Td>
                      <Group>
                        <Image
                          src={item.image}
                          alt={item.name}
                          w={60}
                          h={60}
                          radius="md"
                        />
                        <Text>{item.name}</Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>${item.price.toLocaleString("es-CO")}</Table.Td>
                    <Table.Td>
                      <NumberInput
                        min={1}
                        value={item.quantity}
                        onChange={(val) =>
                          updateQuantity(item.id, Number(val) || 1)
                        }
                        hideControls
                        w={60}
                      />
                    </Table.Td>
                    <Table.Td>
                      ${(item.price * item.quantity).toLocaleString("es-CO")}
                    </Table.Td>
                    <Table.Td>
                      <ActionIcon
                        onClick={() => removeItem(item.id)}
                        color="red"
                        variant="subtle"
                      >
                        <IconTrash size={18} />
                      </ActionIcon>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>

            {/* Resumen */}
            <Group justify="space-between" mt="xl">
              <Stack gap={2}>
                <Text size="lg" fw={700}>
                  Subtotal: ${subtotal.toLocaleString("es-CO")}
                </Text>
                <Text size="sm" c="gray">
                  * No incluye envío ni impuestos.
                </Text>
              </Stack>
              <Button size="lg">Realizar compra</Button>
            </Group>
          </>
        )}
      </Container>
    </Box>
  );
};

export default CartView;
