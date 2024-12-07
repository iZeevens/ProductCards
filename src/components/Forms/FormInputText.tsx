import { Controller, } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFieldsTextType } from "../../types/formsTypes";

const FormInputText = ({ name, control, label }: IFieldsTextType) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          size="medium"
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          sx={{ marginBottom: 2 }}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default FormInputText;
