import {
  TextField,
  Box,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./schemaProduct/schemaProduct";
import { IFormInputs } from "../../types/dataType";

function ProductCreate() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      status: "unknown",
      gender: "unknown",
    }
  });

  const fields = [
    { name: "image", label: "Image" },
    { name: "name", label: "Name" },
    { name: "origin", label: "Origin" },
    { name: "location", label: "Location" },
    { name: "species", label: "Species" },
  ];
  const selectFields: Array<{
    name: keyof IFormInputs;
    label: string;
    options: string[];
  }> = [
    {
      name: "gender",
      label: "Gender",
      options: ["Female", "Male", "Genderless", "unknown"],
    },
    {
      name: "status",
      label: "Status",
      options: ["Alive", "Dead", "unknown"],
    },
  ];

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="grid"
        gap={3}
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          gridTemplateColumns: "1fr",
        }}
      >
        {fields.map((field) => (
          <Box key={field.name}>
            <Controller
              name={field.name as keyof IFormInputs}
              control={control}
              defaultValue=""
              render={({ field: controllerField }) => (
                <TextField
                  {...controllerField}
                  label={field.label}
                  variant="outlined"
                  fullWidth
                  error={!!errors[field.name as keyof IFormInputs]}
                  helperText={errors[field.name as keyof IFormInputs]?.message}
                />
              )}
            />
          </Box>
        ))}

        {selectFields.map((field) => (
          <Box key={field.name}>
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id={`${field.name}-label`}>
                    {field.label}
                  </InputLabel>
                  <Select
                    labelId={`${field.name}-label`}
                    value={value}
                    onChange={onChange}
                    error={!!errors[field.name]}
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            {errors[field.name] && (
              <Box color="error.main" mt={1}>
                {errors[field.name]?.message}
              </Box>
            )}
          </Box>
        ))}

        <Box display="flex" justifyContent="center" mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default ProductCreate;
