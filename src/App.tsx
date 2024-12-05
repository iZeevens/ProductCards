import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch } from "./store/store";
import { fetchItems } from "./feature/data/dataSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
