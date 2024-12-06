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
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./yupSchemaProduct/schemaProduct";
import { addItem } from "../../feature/data/dataSlice";
import { IFormInputs, ICharacter } from "../../types/dataType";
import { IFieldsType } from "./types/fieldsTypes";
import BackButton from "../ui/BackButton/BackButton";

function ProductCreate() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      status: "unknown",
      gender: "unknown",
    },
  });

  const fields = [
    { name: "image", label: "Image" },
    { name: "name", label: "Name" },
    { name: "origin", label: "Origin" },
    { name: "location", label: "Location" },
    { name: "species", label: "Species" },
  ];
  const selectFields: IFieldsType[] = [
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
    const newCharacter: ICharacter = {
      ...data,
      id: Date.now(),
      type: "",
      origin: { name: data.origin, url: "" },
      location: { name: data.location, url: "" },
      episode: [],
      url: "",
      created: new Date().toISOString(),
      liked: false,
    };

    dispatch(addItem(newCharacter));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BackButton />
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
