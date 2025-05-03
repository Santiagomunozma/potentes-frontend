import { Button, Group, Modal, Stack } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { TextInputField } from "../../../components/inputs/text-input";
import { SelectField } from "../../../components/inputs/select-input";

interface UserFormData {
  name: string;
  email: string;
  status: string;
  role: string;
}

type CreateFormUsersProps = {
  opened: boolean;
  close: () => void;
};

const CreateFormModal = ({ opened, close }: CreateFormUsersProps) => {
  const methods = useForm<UserFormData>({
    defaultValues: {
      name: "",
      email: "",
      status: "active",
      role: "customer",
    },
  });

  return (
    <Modal opened={opened} onClose={close} title="Crear nuevo usuario" centered>
      <FormProvider {...methods}>
        <Stack>
          <TextInputField
            control={methods.control}
            name="name"
            label="Nombre"
            placeholder="Ingrese el nombre"
            required
          />
          <TextInputField
            control={methods.control}
            name="email"
            label="Email"
            placeholder="Ingrese el email"
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
          />
          <SelectField
            control={methods.control}
            name="role"
            label="Rol"
            placeholder="Seleccione el rol"
            options={[
              { value: "admin", label: "Administrador" },
              { value: "customer", label: "Cliente" },
              { value: "employee", label: "Empleado" },
            ]}
          />
          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={close}>
              Cancelar
            </Button>
            <Button type="submit">Crear usuario</Button>
          </Group>
        </Stack>
      </FormProvider>
    </Modal>
  );
};

export { CreateFormModal };
