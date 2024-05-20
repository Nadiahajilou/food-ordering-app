import { createSlice } from "@reduxjs/toolkit";

const categoreSlice = createSlice({
  name: "categorie",
  initialState: {
    selectedCategorie: "All",
  },
  reducers: {
    setCategorie: (state, action) => {
        state.selectedCategorie = action.payload;
    },
  },
});
 export const {setCategorie}=categoreSlice.actions
 export default  categoreSlice.reducer