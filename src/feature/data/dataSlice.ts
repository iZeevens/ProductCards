import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../types/dataType";

interface Item {
  items: ICharacter[];
}

const initialState: Item = {
  items: [],
};

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
});

export const { addItem, setItems, clearItems } = dataSlice.actions;
export default dataSlice.reducer;
