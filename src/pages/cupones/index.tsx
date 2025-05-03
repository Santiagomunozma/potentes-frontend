import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Tabs,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconTicket } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { CreateFormModal } from "./components/create-form-coupons";
import { CouponsTable } from "./components/coupons-table";

const StatCard = ({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) => (
  <Card withBorder radius="md" padding="lg" shadow="none" bg="white">
    <Stack gap={2}>
      <Text size="xs" c="dimmed">
        {label}
      </Text>
      <Title order={3}>{value}</Title>
      <Text size="xs" c={change.includes("+") ? "green" : "red"}>
        {change} desde el mes pasado
      </Text>
    </Stack>
  </Card>
);

const CuponesPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de Cupones</Title>
          <Button leftSection={<IconTicket size={16} />} onClick={open}>
            Crear Cupón
          </Button>
        </Group>

        <CreateFormModal opened={opened} close={close} />

        <Grid mb="lg">
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Cupones activos" value="12" change="+2" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Cupones usados" value="173" change="+15.2%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Descuento promedio" value="18%" change="+3.1%" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatCard label="Conversión" value="24%" change="+6.4%" />
          </Grid.Col>
        </Grid>

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todos</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Buscar cupón" />
          </Group>
        </Group>
        <CouponsTable />
      </Container>
    </Box>
  );
};

export { CuponesPage };
