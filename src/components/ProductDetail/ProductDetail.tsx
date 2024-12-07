import { Card, CardMedia, CardContent, Button, Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useFetchProduct from "../../hooks/useFetchProduct";
import { RootState } from "../../store/store";
import DetailCard from "./DetailView/DetailView";
import DetailEdit from "./DetailEdit/DetailEdit";
import BackButton from "../ui/BackButton/BackButton";

function ProductDetail() {
  const [isEdit, setEdit] = useState<boolean>(false);
  const { id } = useParams();
  const { items } = useSelector((state: RootState) => state.data);

  useFetchProduct();
  const product = items.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleEditClick = () => {
    setEdit((prev) => !prev);
  };

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
              id={product.id}
              name={product.name}
              species={product.species}
              status={product.status}
              gender={product.gender}
              originName={product.origin.name}
              locationName={product.location.name}
              handleEditClick={handleEditClick}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {isEdit ? (
              ""
            ) : (
              <Button
                onClick={handleEditClick}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
            )}
            <BackButton />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetail;
