import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const AboutUsUrban = () => {
  return (
    <Box id="aboutUsUrban" py="5rem">
      <Container fluid>
        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: "relative" }}>
              <Image
                src="https://thestreetwearkingdom.wordpress.com/wp-content/uploads/2017/10/cropped-hype.jpg"
                alt="Streetwear look"
                radius="md"
                style={{
                  border: "2px solid white",
                  objectFit: "cover",
                  maxHeight: "50vh",
                }}
                w="100%"
                h="auto"
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group justify="center">
              <Stack gap="sm" maw={600}>
                <Title order={2} size="3rem" fw={900} tt="uppercase">
                  Sobre Nosotros
                </Title>
                <Text c="gray.5" size="md" lh="1.6">
                  En <strong>POTENTES</strong>, creemos que la ropa no solo se
                  viste, se vive. Nuestra esencia viene de la calle, de la
                  cultura urbana, del ruido, del arte, del ritmo y la rebeldía.
                </Text>
                <Text c="gray.5" size="md" lh="1.6">
                  Desde 2023, venimos rompiendo esquemas con colecciones que
                  mezclan estilo, actitud y autenticidad. Somos más que una
                  marca: somos un movimiento.
                </Text>
              </Stack>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsUrban;
