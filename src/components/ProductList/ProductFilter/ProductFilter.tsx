import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface FilterProps {
  filter: "all" | "liked";
  onFilterChange: (event: SelectChangeEvent<"all" | "liked">) => void;
}

function ProductFilter({ filter, onFilterChange }: FilterProps) {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={filter}
        onChange={onFilterChange}
        displayEmpty
        inputProps={{ "aria-label": "Filter by" }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="liked">Favorites</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ProductFilter;
