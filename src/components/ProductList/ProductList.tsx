import { Card } from "@mui/material";
import { fetchItems } from "../../feature/data/dataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load data. Please try again later.</div>;
  }

  return <Card></Card>;
}

export default ProductList;
