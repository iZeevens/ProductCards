import { useState, useMemo, useCallback } from "react";
import { Box, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductSearch from "./ProductSearch/ProductSearch";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductItem from "./ProductItem/ProductItem";

function ProductList() {
  const { status, items } = useSelector((state: RootState) => state.data);
  const [filter, setFilter] = useState<"all" | "liked">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  const handleFilterChange = useCallback(
    (event: SelectChangeEvent<"all" | "liked">) => {
      setFilter(event.target.value as "all" | "liked");
    },
    []
  );

  const filteredItems = useMemo(() => {
    const filteredBySearch = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filter === "liked"
      ? filteredBySearch.filter((item) => item.liked)
      : filteredBySearch;
  }, [items, searchTerm, filter]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Failed to load data. Please try again later.</div>;
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 3,
        gap: 3,
      }}
    >
      <Box>
        <ProductSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <ProductFilter onFilterChange={handleFilterChange} filter={filter} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
          padding: 2,
        }}
      >
        {filteredItems.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default ProductList;
