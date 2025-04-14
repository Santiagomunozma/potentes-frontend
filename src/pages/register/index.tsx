import {
  Anchor,
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";

const RegisterView = () => {
  const navigate = useNavigate();

  return (
    <Box h="100vh" style={{ display: "flex", alignItems: "center" }}>
      <Container>
        <Paper withBorder shadow="md" p="xl" radius="md">
          <Stack>
            <Title order={2} fw={900} ta="center" mb="xs">
              Crea tu cuenta
            </Title>
            <Text c="gray.5" ta="center">
              Únete a <strong>POTENTES</strong> y recibe acceso a lanzamientos
              exclusivos.
            </Text>

            <TextInput
              label="Nombre completo"
              placeholder="Ej. Laura Mendoza"
              required
              radius="md"
              size="md"
            />

            <TextInput
              label="Correo electrónico"
              placeholder="ejemplo@correo.com"
              required
              radius="md"
              size="md"
            />

            <PasswordInput
              label="Contraseña"
              placeholder="••••••••"
              required
              radius="md"
              size="md"
            />

            <PasswordInput
              label="Confirmar contraseña"
              placeholder="••••••••"
              required
              radius="md"
              size="md"
            />

            <Button size="md" radius="md" fullWidth mt="md">
              Registrarme
            </Button>

            <Text size="sm" ta="center" c="gray.5" mt="md">
              ¿Ya tienes cuenta?{" "}
              <Anchor onClick={() => navigate({ to: "/login" })} fw={500}>
                Inicia sesión
              </Anchor>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterView;
