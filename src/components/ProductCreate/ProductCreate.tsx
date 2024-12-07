import { Box, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationProductSchema } from "../../validation/schemaProduct";
import { addItem } from "../../feature/data/dataSlice";
import { ICharacter } from "../../types/dataType";
import { IFormTextInputs } from "../../types/formsTypes";
import { ITextField, ISelectField } from "./types/ProductCreate";
import FormInputText from "../Forms/FormInputText";
import FormInputSelect from "../Forms/FormInputSelect";
import BackButton from "../ui/BackButton/BackButton";

const fields: ITextField[] = [
  { name: "image", label: "Image" },
  { name: "name", label: "Name" },
  { name: "origin", label: "Origin" },
  { name: "location", label: "Location" },
  { name: "species", label: "Species" },
];

const selectFields: ISelectField[] = [
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

function ProductCreate() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm<IFormTextInputs>({
    resolver: yupResolver(validationProductSchema),
    defaultValues: {
      status: "unknown",
      gender: "unknown",
    },
  });

  const handlekSnakBar = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const onSubmit = (data: IFormTextInputs) => {
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
    handlekSnakBar();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BackButton />
      <Box
        display="grid"
        gap={1}
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          gridTemplateColumns: "1fr",
        }}
      >
        {fields.map((field) => (
          <Box key={field.name}>
            <FormInputText
              name={field.name}
              control={control}
              label={field.label}
            />
          </Box>
        ))}

        {selectFields.map((field) => (
          <Box key={field.name}>
            <FormInputSelect
              name={field.name}
              control={control}
              options={field.options}
              label={field.label}
            />
          </Box>
        ))}

        <Snackbar
          open={open}
          message="Successfully added"
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        />

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
