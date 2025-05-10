import { Button, Group, Modal, Stack } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { TextInputField } from "../../../../components/inputs/text-input";
import { useCreateColors } from "./service";

interface colorFormData {
  color: string;
}

type CreateFormColorsProps = {
  opened: boolean;
  close: () => void;
};

const CreateFormColorModal = ({ opened, close }: CreateFormColorsProps) => {
  const { mutate: createColor, isPending } = useCreateColors();

  const methods = useForm<colorFormData>({
    defaultValues: {
      color: "",
    },
  });

  const onSubmit = (data: colorFormData) => {
    createColor(data, {
      onSuccess: () => {
        close();
        methods.reset();
      },
      onError: (error) => {
        console.log("Error creando color:", error);
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
              name="color"
              label="Color"
              placeholder="Ingrese el color"
              required
            />
            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Cancelar
              </Button>
              <Button loading={isPending} type="submit">
                Crear color
              </Button>
            </Group>
          </Stack>
        </form>
      </FormProvider>
    </Modal>
  );
};

export { CreateFormColorModal };
export type { colorFormData };
