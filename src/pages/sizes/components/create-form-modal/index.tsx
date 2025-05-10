import { Button } from "@mantine/core";

import { Group } from "@mantine/core";

import { FormProvider, useForm } from "react-hook-form";
import { useCreateSize } from "./service";
import { Modal, Stack } from "@mantine/core";
import { TextInputField } from "../../../../components/inputs/text-input";

interface sizeFormData {
  size: string;
}

type CreateFormSizeModalProps = {
  opened: boolean;
  close: () => void;
};

const CreateFormSizeModal = ({ opened, close }: CreateFormSizeModalProps) => {
  const { mutate: createSize, isPending } = useCreateSize();

  const methods = useForm<sizeFormData>({
    defaultValues: {
      size: "",
    },
  });

  const onSubmit = (data: sizeFormData) => {
    createSize(data, {
      onSuccess: () => {
        close();
        methods.reset();
      },
      onError: (error) => {
        console.log("Error creando talla:", error);
      },
    });
  };

  return (
    <Modal opened={opened} onClose={close} title="Crear nuevo color" centered>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack>
            <TextInputField
              control={methods.control}
              name="size"
              label="Talla"
              placeholder="Ingrese la talla"
              required
            />
            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Cancelar
              </Button>
              <Button loading={isPending} type="submit">
                Crear talla
              </Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Modal>
  );
};

export { CreateFormSizeModal };
export type { sizeFormData };
