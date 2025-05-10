import {
  Button,
  Card,
  Loader,
  Menu,
  Stack,
  Table,
  TableThead,
  Text,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { useGetColors } from "./service";

const ColorsTable = () => {
  const { data: colors, error, isSuccess, isError } = useGetColors();

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    return (
      <Card withBorder shadow="none" bg="white">
        <Table highlightOnHover verticalSpacing="sm">
          <TableThead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Color</Table.Th>
              <Table.Th align="right"></Table.Th>
            </Table.Tr>
          </TableThead>
          <Table.Tbody>
            {colors.data.map((color) => (
              <Table.Tr key={color.id}>
                <Table.Td>{color.id}</Table.Td>
                <Table.Td>
                  <Text fw={500}>{color.color}</Text>
                </Table.Td>
                <Table.Td align="right">
                  <Menu shadow="md" position="bottom-end" withArrow>
                    <Menu.Target>
                      <Button variant="subtle" size="xs" px={6}>
                        <IconDotsVertical size={16} />
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item>Detalles</Menu.Item>
                      <Menu.Item>Editar</Menu.Item>
                      <Menu.Item color="red">Eliminar</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    );
  }

  return (
    <Stack align="center" justify="center" py="xl">
      <Loader size="lg" color="green" />
      <Text>Cargando colores...</Text>
    </Stack>
  );
};

export { ColorsTable };
