import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICharacter } from "../../types/dataType";
import { ItemState, IFetchResult } from "./type/dataSliceTypes";

const initialState: ItemState = {
  info: {
    pages: 0,
    count: 0,
  },
  items: [],
  status: "idle",
};

export const fetchItems = createAsyncThunk<
  IFetchResult,
  number,
  { rejectValue: string }
>("data/fetchItems", async (page, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
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
      const index = state.items.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.items[index].liked = liked;

        const likedItems = JSON.parse(localStorage.getItem("liked") || "[]");

        if (liked) {
          likedItems.push(state.items[index]);
        } else {
          const itemIndex = likedItems.findIndex(
            (item: ICharacter) => item.id === id
          );
          if (itemIndex !== -1) {
            likedItems.splice(itemIndex, 1);
          }
        }

        localStorage.setItem("liked", JSON.stringify(likedItems));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<IFetchResult>) => {
          state.status = "succeeded";
          state.items = action.payload.results;
          state.info = action.payload.info;

          const likedItems = JSON.parse(localStorage.getItem("liked") || "[]");
          if (likedItems.length > 0) {
            state.items.forEach((item) => {
              const likedItem = likedItems.find(
                (liked: { id: number }) => liked.id === item.id
              );
              if (likedItem) {
                item.liked = true;
              }
            });
          }
        }
      )
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addItem, deleteItem, updateItemLikeStatus } = dataSlice.actions;
export default dataSlice.reducer;
