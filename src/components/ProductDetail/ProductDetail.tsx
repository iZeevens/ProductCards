import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const { items } = useSelector((state: RootState) => state.data);
  const navigate = useNavigate();

  const product = items.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <Card
        sx={{ maxWidth: 500, width: "100%", borderRadius: 2, boxShadow: 3 }}
      >
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
          sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            {product.species} - {product.status}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Gender:</strong> {product.gender}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Origin:</strong> {product.origin.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Location:</strong> {product.location.name}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => navigate("/products")}
            startIcon={<ArrowBack />}
          >
            Back to Products
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetail;
