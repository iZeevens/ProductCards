import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../feature/data/dataSlice";
import { RootState, AppDispatch } from "../store/store";

function useFetchProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems(1));
    }
  }, [dispatch, items]);
}

export default useFetchProduct;
