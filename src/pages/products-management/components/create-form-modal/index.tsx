import { Button, Group, Modal, Stack } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { TextInputField } from "../../../../components/inputs/text-input";
import { NumberInputField } from "../../../../components/inputs/number-input";
import { SelectField } from "../../../../components/inputs/select-input";
import { useCreateProduct } from "./service";

interface ProductFormData {
  name: string;
  sku: string;
  imageUrl: string;
  description: string;
  careinstructions: string;
  stock: number;
  price: number;
  status: string;
}

type CreateFormModalProps = {
  opened: boolean;
  close: () => void;
};

const CreateFormModal = ({ opened, close }: CreateFormModalProps) => {
  const { mutate: createProduct, isPending } = useCreateProduct();

  const methods = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      sku: "",
      stock: 0,
      price: 0,
      status: "active",
    },
  });

  const onSubmit = (data: ProductFormData) => {
    createProduct(data, {
      onSuccess: () => {
        close();
        methods.reset();
      },
      onError: (error) => {
        console.log("Error creando producto: ", error);
      },
    });
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Agregar nuevo producto"
      centered
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack>
            <TextInputField
              control={methods.control}
              name="name"
              label="Nombre del producto"
              placeholder="Ingrese el nombre"
              required
            />
            <TextInputField
              control={methods.control}
              name="sku"
              label="SKU"
              placeholder="Ingrese el SKU"
              required
            />
            <TextInputField
              control={methods.control}
              name="imageUrl"
              label="Imagen"
              placeholder="Ingrese la URL de la imagen"
              required
              pattern="https?://.+"
            />
            <NumberInputField
              control={methods.control}
              name="stock"
              label="Stock"
              placeholder="Ingrese el stock"
              required
              min={1}
            />
            <NumberInputField
              control={methods.control}
              name="price"
              label="Precio"
              placeholder="Ingrese el precio"
              required
              min={1}
            />
            <TextInputField
              control={methods.control}
              name="description"
              label="Descripcion"
              placeholder="Ingrese la descripcion"
              required
            />
            <TextInputField
              control={methods.control}
              name="careinstructions"
              label="Instrucciones de cuidado"
              placeholder="Ingrese las instrucciones de cuidado"
              required
            />
            <SelectField
              name="status"
              control={methods.control}
              label="Estado"
              placeholder="Seleccione el estado"
              options={[
                { value: "active", label: "Activo" },
                { value: "inactive", label: "Inactivo" },
              ]}
              required
              clearable
            />
            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Cancelar
              </Button>
              <Button loading={isPending} type="submit">
                Agregar producto
              </Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Modal>
  );
};

export { CreateFormModal };
export type { ProductFormData };
