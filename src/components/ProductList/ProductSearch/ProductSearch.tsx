import { Box, TextField } from "@mui/material";
import { memo } from "react";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductSearch = memo(({ searchTerm, onSearchChange }: SearchProps) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </Box>
  );
});

export default ProductSearch;
