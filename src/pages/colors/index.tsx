import {
  Box,
  Button,
  Container,
  Group,
  Tabs,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTicket } from "@tabler/icons-react";
import { CreateFormColorModal } from "./components/create-form-modal";
import { ColorsTable } from "./colors-table";

const ColorsManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de Colores</Title>
          <Button leftSection={<IconTicket size={16} />} onClick={open}>
            Crear Color
          </Button>
        </Group>

        <CreateFormColorModal opened={opened} close={close} />

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todos</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Buscar color" />
          </Group>
        </Group>
        <ColorsTable />
      </Container>
    </Box>
  );
};

export { ColorsManagementPage };
