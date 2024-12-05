import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { updateItemLikeStatus } from "../../../feature/data/dataSlice";

const LikeButton = ({ id, liked }: { id: number; liked: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLikeClick = (
    event: React.MouseEvent,
    id: number,
    liked: boolean
  ) => {
    event.stopPropagation();
    dispatch(updateItemLikeStatus({ id, liked: !liked }));
  };

  return (
    <IconButton
      sx={{ color: "red" }}
      onClick={(e) => handleLikeClick(e, id, liked || false)}
    >
      {liked ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default LikeButton;
