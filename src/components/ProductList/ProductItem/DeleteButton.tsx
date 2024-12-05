import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { Delete } from "@mui/icons-material";
import { deleteItem } from "../../../feature/data/dataSlice";

const DeleteButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteClick = (event: React.MouseEvent, id: number) => {
    event.stopPropagation();
    dispatch(deleteItem({ id }));
  };

  return (
    <IconButton
      sx={{ color: "grey" }}
      onClick={(e) => handleDeleteClick(e, id)}
    >
      <Delete />
    </IconButton>
  );
};

export default DeleteButton;
