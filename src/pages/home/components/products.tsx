import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import ProductCard from "../../../components/product-card";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

const products = [
  {
    id: "1",
    name: "Hoodie Oversized",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 240000,
    discount: 180000,
    bestseller: true,
  },
  {
    id: "2",
    name: "Chaqueta Urban Pro",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 320000,
    discount: null,
    bestseller: false,
  },
  {
    id: "3",
    name: "Camiseta Skate Style",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 95000,
    discount: 79000,
    bestseller: true,
  },
  {
    id: "3",
    name: "Camiseta Skate Style",
    image:
      "https://cdn-images.farfetch-contents.com/25/35/77/87/25357787_55465693_600.jpg",
    price: 95000,
    discount: 79000,
    bestseller: true,
  },
];

const Products = () => {
  return (
    <Container id="products" py="4rem" fluid>
      <Stack gap="lg" align="center">
        <Title order={2} size="3rem" fw={900} tt="uppercase">
          Nuestros Productos
        </Title>
        <Text>
          Descubre nuestra colección de ropa urbana, diseñada para personas que
          buscan un estilo único y auténtico.
        </Text>
        <Box py="xl">
          <Grid gutter="xl" justify="center">
            {products.map((product) => (
              <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 3 }}>
                <ProductCard {...product} />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
        <Button
          component={Link}
          href="/products"
          variant="filled"
          rightSection={<IconArrowRight size={16} />}
        >
          Ver más
        </Button>
      </Stack>
    </Container>
  );
};

export { Products };
