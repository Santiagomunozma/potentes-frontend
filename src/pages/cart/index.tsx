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
import { Link } from "@tanstack/react-router";
import { useCart } from "../../store";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const CartView = () => {
  const { cart, subtotal } = useCart();

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
                        <Text>{item.name}</Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>${item.price.toLocaleString("es-CO")}</Table.Td>
                    <Table.Td>
                      <NumberInput
                        min={1}
                        value={item.quantity}
                        hideControls
                        w={60}
                      />
                    </Table.Td>
                    <Table.Td>
                      ${(item.price * item.quantity).toLocaleString("es-CO")}
                    </Table.Td>
                    <Table.Td>
                      <ActionIcon color="red" variant="subtle">
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
              <Button component={Link} href="/checkoutpage" size="lg">
                Realizar compra
              </Button>
            </Group>
          </>
        )}
      </Container>
    </Box>
  );
};

export default CartView;
