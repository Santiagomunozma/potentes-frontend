import { Badge, Button, Card, Menu, Table, Text } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

const coupons = [
  {
    id: "CPN-001",
    code: "VERANO2023",
    discount: "20%",
    startDate: "01/06/2023",
    endDate: "31/08/2023",
    usageCount: 45,
    status: "active",
  },
  {
    id: "CPN-002",
    code: "BIENVENIDA",
    discount: "15%",
    startDate: "01/01/2023",
    endDate: "31/12/2023",
    usageCount: 128,
    status: "active",
  },
  {
    id: "CPN-003",
    code: "BLACKFRIDAY",
    discount: "30%",
    startDate: "24/11/2023",
    endDate: "27/11/2023",
    usageCount: 0,
    status: "inactive",
  },
];

const CouponsTable = () => {
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
            <Table.Th align="right"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {coupons.map((coupon) => (
            <Table.Tr key={coupon.id}>
              <Table.Td>{coupon.id}</Table.Td>
              <Table.Td>
                <Text fw={500}>{coupon.code}</Text>
              </Table.Td>
              <Table.Td>{coupon.discount}</Table.Td>
              <Table.Td>{coupon.startDate}</Table.Td>
              <Table.Td>{coupon.endDate}</Table.Td>
              <Table.Td>{coupon.usageCount}</Table.Td>
              <Table.Td>
                <Badge color={coupon.status === "active" ? "green" : "gray"}>
                  {coupon.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
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
};

export { CouponsTable };
