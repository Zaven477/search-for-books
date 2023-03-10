import { FormEvent } from "react";
import { resetBooks } from "../../store/booksSlice";
import { getBooks } from "../../store/effects";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import "./style.css";

interface IValueProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const BookSearch = ({ value, setValue }: IValueProps) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      return;
    }

    dispatch(resetBooks([]));
    dispatch(getBooks({ value: value, page: 0 }));
  };

  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) {
      setValue(savedText);
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("text", value);
  }, [value]);

  return (
    <div>
      <h1>Search for books</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="width"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <input type="submit" value="Search" className="btn"/>
      </form>
    </div>
  );
};
