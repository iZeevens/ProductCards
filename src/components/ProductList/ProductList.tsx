import { useState, useMemo } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductSearch from "./ProductSearch/ProductSearch";
import ProductItem from "./ProductItem/ProductItem";

function ProductList() {
  const { status, items } = useSelector((state: RootState) => state.data);
  const [searchTerm, setSearchTerm] = useState("");

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load data. Please try again later.</div>;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBySearch = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 3,
        gap: 3,
      }}
    >
      <ProductSearch
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
          padding: 2,
        }}
      >
        {filteredBySearch.map((item) => (
          <ProductItem key={item.name} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default ProductList;
