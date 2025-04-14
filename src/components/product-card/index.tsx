import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconShoppingCart, IconBolt } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number | null;
  bestseller?: boolean;
  onAddToCart?: (id: string) => void;
  onBuyNow?: (id: string) => void;
  onViewDetails?: (id: string) => void;
};

const ProductCard = ({
  id,
  name,
  image,
  price,
  discount,
  bestseller,
  onAddToCart,
  onBuyNow,
}: ProductCardProps) => {
  const finalPrice = discount ?? price;
  const navigate = useNavigate();

  return (
    <Card
      p="xl"
      style={{
        cursor: "pointer",
        position: "relative",
        boxShadow: "none",
      }}
      onClick={() => navigate({ to: "/product-details", params: { id } })}
      bg="white"
    >
      <Stack gap="xs">
        <Box style={{ position: "relative" }}>
          <Image
            src={image}
            alt={name}
            radius="md"
            h={400}
            fit="cover"
            style={{ objectPosition: "center", objectFit: "contain" }}
          />
          {bestseller && (
            <Badge
              color="red"
              variant="filled"
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 1,
              }}
            >
              🔥 MÁS VENDIDO
            </Badge>
          )}
        </Box>

        <Title order={2}>{name}</Title>

        <Group align="center">
          <Text size="xl" c="primary">
            ${finalPrice.toLocaleString("es-CO")}
          </Text>

          {discount && (
            <Badge color="red" variant="transparent" td="line-through">
              Antes: ${price.toLocaleString("es-CO")}
            </Badge>
          )}
        </Group>

        <Group grow mt="sm">
          <Button
            leftSection={<IconShoppingCart size={18} />}
            variant="transparent"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
          >
            Agregar
          </Button>
          <Button
            leftSection={<IconBolt size={18} />}
            onClick={(e) => {
              e.stopPropagation();
              onBuyNow?.(id);
            }}
          >
            Comprar
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default ProductCard;
