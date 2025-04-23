import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  NumberInput,
  Paper,
  Rating,
  Select,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import {
  IconShoppingCart,
  IconBolt,
  IconTruck,
  IconShield,
  IconRefresh,
  IconStar,
} from "@tabler/icons-react";
import { useState } from "react";

// Simulando un producto
const product = {
  id: "1",
  name: "Hoodie Oversized Unisex",
  price: 180000,
  discount: 130000,
  image:
    "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
  description:
    "Esta hoodie está diseñada para quienes no siguen reglas. Con tela gruesa, corte oversized y acabados premium, es ideal para destacar en las calles.",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Negro", "Gris", "Blanco"],
  rating: 4.7,
  reviews: 128,
  material: "80% Algodón, 20% Poliéster",
  care: "Lavar a máquina a 30°C, no usar blanqueador, planchar a temperatura media",
  additionalImages: [
    "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
  ],
  relatedProducts: [
    {
      id: "2",
      name: "Camiseta Skate Style",
      price: 95000,
      discount: 79000,
      image:
        "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    },
    {
      id: "3",
      name: "Chaqueta Urban Pro",
      price: 320000,
      image:
        "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    },
  ],
};

const ProductDetailsView = () => {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Negro");
  const [mainImage, setMainImage] = useState(product.image);

  const finalPrice = product.discount ?? product.price;

  return (
    <Box py="xl">
      <Container fluid>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack>
              <Image
                src={mainImage}
                alt={product.name}
                radius="md"
                fit="contain"
                w="100%"
                h={300}
                mah={500}
              />
              <Group justify="center" gap="xs">
                {product.additionalImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width={80}
                    height={80}
                    radius="md"
                    fit="cover"
                    style={{
                      cursor: "pointer",
                      border: img === mainImage ? "2px solid #228be6" : "none",
                    }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          {/* Detalles */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="sm">
              <Group>
                <Badge variant="filled">Nuevo</Badge>
                {product.discount && (
                  <Badge color="red" variant="filled">
                    Oferta
                  </Badge>
                )}
              </Group>

              <Title order={2} fw={900}>
                {product.name}
              </Title>

              <Group>
                <Rating value={product.rating} fractions={2} readOnly />
                <Text size="sm" c="dimmed">
                  ({product.reviews} reseñas)
                </Text>
              </Group>

              <Group>
                <Text size="xl" fw={700}>
                  ${finalPrice.toLocaleString("es-CO")}
                </Text>
                {product.discount && (
                  <Badge color="red" variant="light">
                    Antes: ${product.price.toLocaleString("es-CO")}
                  </Badge>
                )}
                {product.discount && (
                  <Badge color="green" variant="filled">
                    {Math.round((1 - product.discount / product.price) * 100)}%
                    OFF
                  </Badge>
                )}
              </Group>

              <Text size="sm" c="gray.6" mt="xs">
                {product.description}
              </Text>

              <Divider my="sm" />

              <Group grow>
                <Select
                  label="Talla"
                  data={product.sizes}
                  value={size}
                  onChange={(v) => setSize(v || "M")}
                />
                <Select
                  label="Color"
                  data={product.colors}
                  value={color}
                  onChange={(v) => setColor(v || "Negro")}
                />
              </Group>

              <NumberInput
                label="Cantidad"
                min={1}
                value={quantity}
                onChange={(v) => setQuantity(Number(v) || 1)}
              />

              <Group grow mt="lg">
                <Button
                  leftSection={<IconShoppingCart size={18} />}
                  variant="outline"
                  size="lg"
                >
                  Agregar al carrito
                </Button>
                <Button leftSection={<IconBolt size={18} />} size="lg">
                  Comprar ahora
                </Button>
              </Group>

              <Divider my="sm" />

              <Group>
                <Group gap="xs">
                  <IconTruck size={20} />
                  <Text size="sm">
                    Envío gratis en compras mayores a $200.000
                  </Text>
                </Group>
              </Group>
              <Group>
                <Group gap="xs">
                  <IconShield size={20} />
                  <Text size="sm">Garantía de 30 días</Text>
                </Group>
              </Group>
              <Group>
                <Group gap="xs">
                  <IconRefresh size={20} />
                  <Text size="sm">Devoluciones sin costo</Text>
                </Group>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" />

        <Tabs defaultValue="details">
          <Tabs.List>
            <Tabs.Tab value="details">Detalles del producto</Tabs.Tab>
            <Tabs.Tab value="care">Cuidados</Tabs.Tab>
            <Tabs.Tab value="reviews">Reseñas</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="details" pt="md">
            <Stack>
              <Group>
                <Text fw={600}>Material:</Text>
                <Text>{product.material}</Text>
              </Group>
              <Group>
                <Text fw={600}>Disponibilidad:</Text>
                <Text>En stock</Text>
              </Group>
              <Group>
                <Text fw={600}>Código del producto:</Text>
                <Text>{product.id}</Text>
              </Group>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="care" pt="md">
            <Text>{product.care}</Text>
          </Tabs.Panel>

          <Tabs.Panel value="reviews" pt="md">
            <Stack>
              <Group>
                <IconStar size={24} />
                <Text size="xl" fw={700}>
                  {product.rating} de 5
                </Text>
                <Text>Basado en {product.reviews} reseñas</Text>
              </Group>

              <Paper p="md" withBorder>
                <Stack>
                  <Group>
                    <Text fw={700}>María L.</Text>
                    <Rating value={5} readOnly size="xs" />
                  </Group>
                  <Text size="sm">
                    ¡Me encanta esta hoodie! El material es de excelente calidad
                    y el tamaño oversized es perfecto.
                  </Text>
                </Stack>
              </Paper>

              <Paper p="md" withBorder>
                <Stack>
                  <Group>
                    <Text fw={700}>Carlos R.</Text>
                    <Rating value={4} readOnly size="xs" />
                  </Group>
                  <Text size="sm">
                    Muy buena calidad, aunque el color es ligeramente diferente
                    al de la foto. Aun así, estoy satisfecho con la compra.
                  </Text>
                </Stack>
              </Paper>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
};

export default ProductDetailsView;
