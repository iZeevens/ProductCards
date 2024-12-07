import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { updateItem } from "../../../feature/data/dataSlice";
import { IFormTextInputs } from "../../../types/formsTypes";
import FormInputText from "../../Forms/FormInputText";
import FormInputSelect from "../../Forms/FormInputSelect";

interface IDetailEditProps extends IFormTextInputs {
  id: number;
  handleEditClick: () => void;
}

function DetailEdit({
  // id,
  name,
  species,
  status,
  gender,
  origin,
  location,
  handleEditClick,
}: IDetailEditProps) {
  // const dipatch = useDispatch();
  const { control, handleSubmit } = useForm<IFormTextInputs>({
    defaultValues: { name, species, status, gender, origin, location },
  });

  const onSubmit = (data: IFormTextInputs) => {
    // dipatch(updateItem({id, changes: data}));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInputText name="name" control={control} label="Name" />
      <Box
        sx={{
          display: "flex",
          gap: 15,
        }}
      >
        <FormInputText name="species" control={control} label="Species" />
        <FormInputSelect
          name="status"
          control={control}
          label="Status"
          options={["Alive", "Dead", "unknown"]}
        />
      </Box>
      <FormInputSelect
          name="gender"
          control={control}
          label="Gender"
          options={["Female", "Male", "Genderless", "unknown"]}
        />
      <FormInputText name="origin" control={control} label="Origin" />
      <FormInputText name="location" control={control} label="Location" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={handleEditClick}>
          Cancel
        </Button>
      </Box>
    </form>
  );
}

export default DetailEdit;
