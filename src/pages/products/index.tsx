import {
  Box,
  Container,
  Grid,
  Loader,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import ProductCard from "../../components/product-card";
import { useGetProducts } from "../products-management/products-table/service";

const Products = () => {
  const { data: products, error, isSuccess, isError } = useGetProducts();

  if (isError) {
    return <Text c="red">Error: {error.message}</Text>;
  }

  if (isSuccess) {
    return (
      <Container py="4rem" fluid>
        <Stack gap="lg" align="center">
          <Title order={2} size="3rem" fw={900} tt="uppercase">
            Nuestros Productos
          </Title>
          <Text>
            Descubre nuestra colección de ropa urbana, diseñada para personas
            que buscan un estilo único y auténtico.
          </Text>
          <Box py="xl" w="100%">
            <Grid gutter="lg">
              {products.map((product) => (
                <Grid.Col key={product.sku} span={{ base: 12, sm: 6, md: 3 }}>
                  <ProductCard {...product} />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    );
    return (
      <Stack align="center" justify="center" py="xl">
        <Loader size="lg" color="green" />
        <Text>Cargando productos...</Text>
      </Stack>
    );
  }
};

export { Products };
