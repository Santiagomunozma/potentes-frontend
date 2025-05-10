import {
  Badge,
  Button,
  Card,
  Loader,
  Menu,
  Stack,
  Table,
  Text,
  Select,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { useGetCoupons } from "./service";
import { useGetColors } from "../../colors/colors-table/service";
import { useGetSizes } from "../../sizes/sizes-table/service";
import dayjs from "dayjs";

const CouponsTable = () => {
  const { data: coupons, error, isSuccess, isError } = useGetCoupons();
  const { data: colors } = useGetColors();
  const { data: sizes } = useGetSizes();

  if (isError) {
    return <Text c="red">Error: {error.message}</Text>;
  }

  if (isSuccess) {
    return (
      <Card withBorder shadow="none" bg="white">
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Código</Table.Th>
              <Table.Th>Descuento</Table.Th>
              <Table.Th>Fecha inicio</Table.Th>
              <Table.Th>Fecha fin</Table.Th>
              <Table.Th>Usos</Table.Th>
              <Table.Th>Estado</Table.Th>
              <Table.Th>Color</Table.Th>
              <Table.Th>Talla</Table.Th>
              <Table.Th align="right"></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {coupons.data.map((coupon) => (
              <Table.Tr key={coupon.id}>
                <Table.Td>{coupon.id}</Table.Td>
                <Table.Td>
                  <Text fw={500}>{coupon.code}</Text>
                </Table.Td>
                <Table.Td>{coupon.discount}</Table.Td>
                <Table.Td>
                  {dayjs(coupon.startDate).format("DD/MM/YYYY")}
                </Table.Td>
                <Table.Td>
                  {dayjs(coupon.endDate).format("DD/MM/YYYY")}
                </Table.Td>
                <Table.Td>{0}</Table.Td>
                <Table.Td>
                  <Badge color={coupon.status === "active" ? "green" : "gray"}>
                    {coupon.status === "active" ? "Activo" : "Inactivo"}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Select
                    data={
                      colors?.data.map((color) => ({
                        value: color.id,
                        label: color.color,
                      })) || []
                    }
                    placeholder="Seleccionar color"
                    searchable
                    clearable
                  />
                </Table.Td>
                <Table.Td>
                  <Select
                    data={
                      sizes?.data.map((size) => ({
                        value: size.id,
                        label: size.size,
                      })) || []
                    }
                    placeholder="Seleccionar talla"
                    searchable
                    clearable
                  />
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
      <Text>Cargando productos...</Text>
    </Stack>
  );
};

export { CouponsTable };
