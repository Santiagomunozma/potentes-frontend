import {
  useController,
  Control,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import { NumberInput, NumberInputProps, Text } from "@mantine/core";

export interface NumberInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<NumberInputProps, "value" | "onChange" | "error"> {
  name: TName;
  control: Control<TFieldValues>;
  label?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  required?: boolean;
  hideControls?: boolean;
  errorMessage?: string;
  description?: string;
}

export function NumberInputField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  placeholder,
  min,
  max,
  step = 1,
  precision = 0,
  required = false,
  hideControls = false,
  errorMessage,
  description,
  ...restProps
}: NumberInputFieldProps<TFieldValues, TName>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? "This field is required" : false,
      min:
        min !== undefined
          ? { value: min, message: `Value must be at least ${min}` }
          : undefined,
      max:
        max !== undefined
          ? { value: max, message: `Value must be at most ${max}` }
          : undefined,
    },
  });

  // Handle the value conversion (string <-> number)
  const handleChange = (value: string | number) => {
    // Convert to number or null
    const numValue = value === "" ? null : Number(value);
    field.onChange(numValue);
  };

  return (
    <div className="mb-4">
      <NumberInput
        {...restProps}
        label={label}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        hideControls={hideControls}
        required={required}
        value={field.value}
        onChange={handleChange}
        onBlur={field.onBlur}
        name={field.name}
        error={error?.message || errorMessage}
        description={description}
      />
      {error && (
        <Text color="red" size="xs" mt={4}>
          {error.message}
        </Text>
      )}
    </div>
  );
}
