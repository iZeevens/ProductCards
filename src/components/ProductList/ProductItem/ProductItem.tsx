import { memo } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../../../types/dataType";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

const ProductItem = memo(({ item }: { item: ICharacter }) => {
  const navigate = useNavigate();

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
          <LikeButton id={item.id} liked={item.liked || false} />
          <DeleteButton id={item.id} />
        </Box>
      </CardContent>
    </Card>
  );
});

export default ProductItem;
