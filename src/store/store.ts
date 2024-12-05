import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../feature/data/dataSlice";

const store = configureStore({
  reducer: dataReducer,
});

export { store };
