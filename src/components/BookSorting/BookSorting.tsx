import { useAppDispatch } from "../../hooks";
import { resetBooks } from "../../store/booksSlice";
import { getBooks } from "../../store/effects";
import "./style.css";


interface ISortingProps {
  value: string;
}

export const BookSorting = ({ value }: ISortingProps) => {
  const dispatch = useAppDispatch();

  const sortBooks = (option: string) => {
    if (!value) {
      return
    }
    dispatch(resetBooks([]));
    dispatch(getBooks({ value: value, page: 0, orderBy: option }));
  };

  return (
    <div className="container">
      <select
        className="sortForm"
        onChange={(event) => sortBooks(event.target.value)}
      >
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
};
