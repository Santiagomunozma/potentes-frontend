import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconStars,
  IconFlame,
  IconHeartHandshake,
  IconUsersGroup,
} from "@tabler/icons-react";

const values = [
  {
    icon: IconStars,
    title: "Autenticidad",
    description:
      "Celebramos lo real. Cada prenda es una declaración de identidad, sin filtros ni imitaciones.",
    color: "yellow",
  },
  {
    icon: IconFlame,
    title: "Actitud",
    description:
      "Diseñamos para quienes viven intensamente, con estilo y sin pedir permiso.",
    color: "red",
  },
  {
    icon: IconHeartHandshake,
    title: "Compromiso",
    description:
      "Nos importa tu experiencia. Apostamos por la calidad, el detalle y el respeto por la cultura urbana.",
    color: "blue",
  },
  {
    icon: IconUsersGroup,
    title: "Comunidad",
    description:
      "Más que clientes, somos una tribu. Una familia que vibra con la moda y la calle.",
    color: "green",
  },
];

const ValuesSection = () => {
  return (
    <Box>
      <Container fluid>
        <Stack align="center" mb="xl">
          <Title
            order={2}
            size="3rem"
            fw={900}
            tt="uppercase"
            ta="center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Nuestros Valores
          </Title>
          <Text c="gray.5" ta="center" maw={600}>
            Lo que defendemos y llevamos en cada prenda.
          </Text>
        </Stack>

        <Grid gutter="xl" justify="center" align="center">
          {values.map((value) => (
            <Grid.Col key={value.title} span={{ base: 12, sm: 5, md: 3 }}>
              <Card radius="md" padding="xl" bg="white" shadow="none">
                <Stack gap="xs">
                  <ThemeIcon size={48} radius="xl" variant="outline">
                    <value.icon size={28} />
                  </ThemeIcon>
                  <Title order={4} c="primary">
                    {value.title}
                  </Title>
                  <Text>{value.description}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export { ValuesSection };
