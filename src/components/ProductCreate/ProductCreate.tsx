import { TextField, Box, Button, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./schemaProduct/schemaProduct";
import { IFormInputs } from "./types/productCreateTypes";

function ProductCreate() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const fields = [
    { name: "image", label: "Image" },
    { name: "name", label: "Name" },
    { name: "gender", label: "Gender" },
    { name: "origin", label: "Origin" },
    { name: "location", label: "Location" },
    { name: "species", label: "Species" },
    { name: "status", label: "Status" },
  ];

  const onSubmit = (data: IFormInputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{ maxWidth: 600, margin: "0 auto" }}
      >
        {fields.map((field) => (
          <Grid container spacing={2} key={field.name}>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
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
