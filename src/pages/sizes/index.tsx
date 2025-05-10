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
import { CreateFormSizeModal } from "./components/create-form-modal";
import { SizesTable } from "./sizes-table";

const SizesManagementPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box py="xl" px="md">
      <Container size="xl">
        <Group justify="space-between" mb="xl">
          <Title order={2}>Gestión de Tallas</Title>
          <Button leftSection={<IconTicket size={16} />} onClick={open}>
            Crear Talla
          </Button>
        </Group>

        <CreateFormSizeModal opened={opened} close={close} />

        <Group justify="space-between" mb="md">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">Todos</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Group>
            <TextInput placeholder="Buscar talla" />
          </Group>
        </Group>
        <SizesTable />
      </Container>
    </Box>
  );
};

export { SizesManagementPage };
