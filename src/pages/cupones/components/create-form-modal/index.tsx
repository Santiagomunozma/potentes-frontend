import { Button, Group, Modal, Stack } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { TextInputField } from "../../../../components/inputs/text-input";
import { NumberInputField } from "../../../../components/inputs/number-input";
import { SelectField } from "../../../../components/inputs/select-input";
import { useCreateCoupons } from "./service";

interface couponFormData {
  code: string;
  discount: number;
  startDate: Date;
  endDate: Date;
  status: string;
}

type CreateFormCouponsProps = {
  opened: boolean;
  close: () => void;
};

const CreateFormCouponModal = ({ opened, close }: CreateFormCouponsProps) => {
  const { mutate: createCoupon, isPending } = useCreateCoupons();

  const methods = useForm<couponFormData>({
    defaultValues: {
      code: "",
      discount: 0,
      status: "active",
    },
  });

  const onSubmit = (data: couponFormData) => {
    createCoupon(data, {
      onSuccess: () => {
        close();
        methods.reset();
      },
      onError: (error) => {
        console.log("Error creando cupón: ", error);
      },
    });
  };

  return (
    <Modal opened={opened} onClose={close} title="Crear nuevo cupón" centered>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack>
            <TextInputField
              control={methods.control}
              name="code"
              label="Código del cupón"
              placeholder="Ingrese el código"
              required
            />
            <NumberInputField
              control={methods.control}
              name="discount"
              label="Descuento (%)"
              placeholder="Ingrese el porcentaje de descuento"
              required
              min={1}
            />
            <TextInputField
              control={methods.control}
              name="startDate"
              label="Fecha de inicio"
              type="date"
              placeholder="Ingrese la fecha de inicio"
              required
            />
            <TextInputField
              control={methods.control}
              name="endDate"
              label="Fecha de fin"
              type="date"
              placeholder="Ingrese la fecha de fin"
              required
            />
            <SelectField
              control={methods.control}
              name="status"
              label="Estado"
              placeholder="Seleccione el estado"
              options={[
                { value: "active", label: "Activo" },
                { value: "inactive", label: "Inactivo" },
              ]}
              required
            />
            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Cancelar
              </Button>
              <Button loading={isPending} type="submit">
                Crear cupón
              </Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Modal>
  );
};

export { CreateFormCouponModal };
export type { couponFormData };
