import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { FavoriteBorder, Delete } from "@mui/icons-material";
import { fetchItems } from "../../feature/data/dataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, items } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load data. Please try again later.</div>;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      {items.map((item) => (
        <Card
          key={item.name}
          sx={{
            maxWidth: 345,
            borderRadius: 2,
            boxShadow: 3,
            cursor: 'pointer',
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={item.image}
            alt={item.name}
            sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
          />
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
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
              <IconButton sx={{ color: "red" }}>
                <FavoriteBorder />
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <Delete />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ProductList;
