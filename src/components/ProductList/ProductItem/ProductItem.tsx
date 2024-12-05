import { memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Favorite, FavoriteBorder, Delete } from "@mui/icons-material";
import {
  updateItemLikeStatus,
  deleteItem,
} from "../../../feature/data/dataSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { ICharacter } from "../../../types/dataType";

const ProductItem = memo(({ item }: { item: ICharacter }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLikeClick = (
    event: React.MouseEvent,
    id: number,
    liked: boolean
  ) => {
    event.stopPropagation();
    dispatch(updateItemLikeStatus({ id, liked: !liked }));
  };

  const handleDeleteClick = (event: React.MouseEvent, id: number) => {
    event.stopPropagation();
    dispatch(deleteItem({ id }));
  };

  return (
    <Card
      key={item.name}
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt={item.name}
        sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {item.species} - {item.status}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <IconButton
            sx={{ color: "red" }}
            onClick={(e) => handleLikeClick(e, item.id, item.liked || false)}
          >
            {item.liked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton
            sx={{ color: "grey" }}
            onClick={(e) => handleDeleteClick(e, item.id)}
          >
            <Delete />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ProductItem;
