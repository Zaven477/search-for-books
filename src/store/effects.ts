import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from "../api";
import { setBooks, setErrors, setLoading } from "./booksSlice";
import { TBooksQuery } from "./types";

export const getBooks = createAsyncThunk(
  "books",
  async ({ value, page, orderBy }: TBooksQuery, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchBooks(value, page, orderBy);
      dispatch(setBooks(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setErrors(error.message));
    }
  }
);





