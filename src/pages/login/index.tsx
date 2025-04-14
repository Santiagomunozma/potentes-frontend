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

const LoginView = () => {
  const navigate = useNavigate();

  return (
    <Box h="100vh" style={{ display: "flex", alignItems: "center" }}>
      <Container>
        <Paper withBorder shadow="md" p="xl" radius="md">
          <Stack>
            <Title order={2} fw={900} ta="center" mb="xs">
              Inicia Sesión
            </Title>
            <Text c="gray.5" ta="center">
              Bienvenido de nuevo a <strong>POTENTES</strong>. Ingresa tus datos
              para continuar.
            </Text>

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

            <Anchor href="#" size="sm" c="gray.4" ta="right">
              ¿Olvidaste tu contraseña?
            </Anchor>

            <Button size="md" radius="md" fullWidth>
              Iniciar sesión
            </Button>

            <Text size="sm" ta="center" c="gray.5" mt="md">
              ¿No tienes cuenta?{" "}
              <Anchor onClick={() => navigate({ to: "/register" })} fw={500}>
                Crea una ahora
              </Anchor>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginView;
