import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: 2 }}
      onClick={() => navigate("/products")}
      startIcon={<ArrowBack />}
    >
      Back to Products
    </Button>
  );
}

export default BackButton;
