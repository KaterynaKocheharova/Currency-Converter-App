import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operations';

const initialState = {
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  baseCurrency: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },

  extraReducers: builder =>
    builder.addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
    })
      .addCase(fetchExchangeCurrency.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.exchangeInfo = payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        state.exchangeInfo = null;
      })
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
