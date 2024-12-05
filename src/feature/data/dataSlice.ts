import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICharacter } from "../../types/dataType";

interface ItemState {
  items: ICharacter[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ItemState = {
  items: [],
  status: "idle",
};

export const fetchItems = createAsyncThunk("data/fetchItems", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.results as ICharacter[];
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICharacter>) => {
      state.items.push(action.payload);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<ICharacter[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addItem, setItems, clearItems } = dataSlice.actions;
export default dataSlice.reducer;
