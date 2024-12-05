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

export const fetchItems = createAsyncThunk<
  ICharacter[],
  void,
  { rejectValue: string }
>("data/fetchItems", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    return rejectWithValue(`Failed to fetch data: ${error}`);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICharacter>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateItemLikeStatus: (
      state,
      action: PayloadAction<{ id: number; liked: boolean }>
    ) => {
      const { id, liked } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) item.liked = liked;
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

export const { addItem, deleteItem, updateItemLikeStatus } = dataSlice.actions;
export default dataSlice.reducer;
