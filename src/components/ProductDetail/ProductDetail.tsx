import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useFetchProduct from "../../hooks/useFetchProduct";
import { RootState } from "../../store/store";
import { Box } from "@mui/material";
import DetailView from "./DetailView/DetailView";

function ProductDetail() {
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
      <DetailView
        image={product.image}
        name={product.name}
        species={product.species}
        status={product.status}
        gender={product.gender}
        originName={product.origin.name}
        locationName={product.location.name}
      />
    </Box>
  );
}

export default ProductDetail;
