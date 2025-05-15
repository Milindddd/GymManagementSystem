import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";

interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  select?: boolean;
  options?: { value: string; label: string }[];
}

interface AuthFormProps {
  fields: FieldConfig[];
  buttonLabel: string;
  onSubmit: (data: FieldValues) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  buttonLabel,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={2}>
      {fields.map((field) =>
        field.select ? (
          <TextField
            key={field.name}
            margin="normal"
            fullWidth
            select
            label={field.label}
            defaultValue={field.options?.[0]?.value || ""}
            {...register(field.name, {
              required: `${field.label} is required`,
            })}
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message as string}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        ) : (
          <TextField
            key={field.name}
            margin="normal"
            fullWidth
            label={field.label}
            type={field.type || "text"}
            {...register(field.name, {
              required: `${field.label} is required`,
            })}
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message as string}
          />
        )
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default AuthForm;
