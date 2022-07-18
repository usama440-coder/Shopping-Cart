import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(isLoading(true));
    try {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      dispatch(setProducts(data));
      dispatch(isLoading(false));
    } catch (err) {
      dispatch(err.message);
    }
  };
}

export const { setProducts, isLoading } = productSlice.actions;
export default productSlice.reducer;
