import { useState } from "react";
import {
  Button,
  Card,
  TextInput,
  Select,
  Group,
  Text,
  Box,
  Stack,
  Container,
  Title,
  Modal,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useCart } from "../pages/cart/CartContext";

const CheckoutPage = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { subtotal } = useCart();
  const navigate = useNavigate();

  const shippingCost = 25000;
  const taxes = subtotal * 0.19;
  const total = subtotal + shippingCost + taxes;

  const handlePurchase = () => {
    if (!address || paymentMethod === "") {
      setError(
        "Por favor, complete todos los campos antes de realizar la compra."
      );
      return;
    }

    if (paymentMethod === "Tarjeta de Débito o Credito") {
      if (!cardNumber || !cardCVC || !cardExpiry || !cardHolderName) {
        setError("Por favor, complete todos los campos de la tarjeta.");
        return;
      }
    }

    setError("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        padding: "2rem",
      }}
    >
      <Container>
        <Text size="xl" w={700} mb="lg">
          Finalizar Compra
        </Text>

        <Card shadow="sm" padding="lg" radius="md">
          <Stack>
            <TextInput
              label="Dirección de Entrega"
              placeholder="Ingrese su dirección"
              value={address}
              onChange={(event) => setAddress(event.currentTarget.value)}
              required
            />

            <Select
              label="Método de Pago"
              placeholder="Seleccione un método de pago"
              data={[
                "Efectivo",
                "Tarjeta de Débito o Credito",
                "Transferencia Bancaria",
              ]}
              value={paymentMethod}
              onChange={(value) => setPaymentMethod(value || "")}
              required
            />

            {paymentMethod === "Tarjeta de Débito o Credito" && (
              <Stack>
                <TextInput
                  label="Número de Tarjeta"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.currentTarget.value)}
                  required
                />
                <TextInput
                  label="CVC"
                  placeholder="123"
                  value={cardCVC}
                  onChange={(event) => setCardCVC(event.currentTarget.value)}
                  required
                />
                <TextInput
                  label="Fecha de Vencimiento"
                  placeholder="MM/AA"
                  value={cardExpiry}
                  onChange={(event) => setCardExpiry(event.currentTarget.value)}
                  required
                />
                <TextInput
                  label="Nombre del Propietario"
                  placeholder="Nombre como aparece en la tarjeta"
                  value={cardHolderName}
                  onChange={(event) =>
                    setCardHolderName(event.currentTarget.value)
                  }
                  required
                />
              </Stack>
            )}

            <Stack>
              <Title order={2}>Resumen de tu compra</Title>
              <Text size="lg">
                Valor de las prendas: ${subtotal.toLocaleString("es-CO")}
              </Text>
              <Text size="lg">
                Costo de envío: ${shippingCost.toLocaleString("es-CO")}
              </Text>
              <Text size="lg">
                Impuestos (19%): ${taxes.toLocaleString("es-CO")}
              </Text>
              <Text size="lg" fw={700}>
                Total a pagar: ${total.toLocaleString("es-CO")}
              </Text>
            </Stack>

            {error && (
              <Text color="red" size="sm" mt="sm">
                {error}
              </Text>
            )}

            <Text className="mt-4 text-gray-500">
              Tiempo estimado de entrega: <strong>3 días hábiles</strong>
            </Text>

            <Group className="mt-6">
              <Button onClick={handlePurchase} variant="filled" color="blue">
                Realizar Compra
              </Button>
            </Group>
          </Stack>
        </Card>
      </Container>

      <Modal
        opened={isModalOpen}
        onClose={handleCloseModal}
        title="¡Compra Exitosa!"
        centered
      >
        <Text>
          Felicidades, ahora eres un miembro más de la familia{" "}
          <strong>LOS POTENTES</strong>. Espera tus prendas y luce con el mejor
          estilo.
        </Text>
      </Modal>
    </Box>
  );
};

export { CheckoutPage };
