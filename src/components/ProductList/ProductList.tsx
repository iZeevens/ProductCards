import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductItem from "./ProductItem/ProductItem";

function ProductList() {
  const { status, items } = useSelector((state: RootState) => state.data);

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
        <ProductItem key={item.name} item={item} />
      ))}
    </Box>
  );
}

export default ProductList;
