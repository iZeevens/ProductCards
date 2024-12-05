import { Box, TextField } from "@mui/material";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ProductSearch({ searchTerm, onSearchChange }: SearchProps) {

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
}

export default ProductSearch;
