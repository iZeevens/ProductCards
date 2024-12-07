import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateItem } from "../../../feature/data/dataSlice";
import FormInputText from "./FormInputText";
import { IFromData } from "./types/fieldTypes";

interface IDetailEditProps extends IFromData {
  id: number;
  handleEditClick: () => void;
}

function DetailEdit({
  id,
  name,
  species,
  status,
  gender,
  originName,
  locationName,
  handleEditClick,
}: IDetailEditProps) {
  const dipatch = useDispatch();
  const { control, handleSubmit } = useForm<IFromData>({
    defaultValues: { name, species, status, gender, originName, locationName },
  });

  const onSubmit = (data: IFromData) => {
    // dipatch(updateItem({id, changes: data}));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInputText name="name" control={control} label="Name" />
      <Box
        sx={{
          display: "flex",
          gap: "15px",
        }}
      >
        <FormInputText name="species" control={control} label="Species" />
        <FormInputText name="status" control={control} label="Status" />
      </Box>
      <FormInputText name="gender" control={control} label="Gender" />
      <FormInputText name="originName" control={control} label="Origin" />
      <FormInputText name="locationName" control={control} label="Location" />
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
