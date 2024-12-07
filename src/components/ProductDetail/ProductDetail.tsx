import { Card, CardMedia, CardContent } from "@mui/material";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useFetchProduct from "../../hooks/useFetchProduct";
import { RootState } from "../../store/store";
import { Box } from "@mui/material";
import DetailCard from "./DetailView/DetailView";
import DetailEdit from "./DetailEdit/DetailEdit";

function ProductDetail() {
  const isEdit = true;
  const { id } = useParams();
  const { items } = useSelector((state: RootState) => state.data);

  useFetchProduct();
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
          {isEdit ? (
            <DetailEdit
              name={product.name}
              species={product.species}
              status={product.status}
              gender={product.gender}
              originName={product.origin.name}
              locationName={product.location.name}
            />
          ) : (
            <DetailCard
              image={product.image}
              name={product.name}
              species={product.species}
              status={product.status}
              gender={product.gender}
              originName={product.origin.name}
              locationName={product.location.name}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetail;
