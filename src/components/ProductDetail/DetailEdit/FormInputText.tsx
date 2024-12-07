import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFormInputProps } from "./types/fieldTypes";

const FormInputText = ({ name, control, label }: IFormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="medium"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
      )}
    />
  );
};

export default FormInputText;
