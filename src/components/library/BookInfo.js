import { Button } from "@mui/material";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer" + localStorage.getItem("token"),
};

export const BookInfo = ({ book, onRefetch }) => {

  // RENT BOOK 
  const onBookRent = (isbn) => {
    console.log("isbn", isbn);
    axios.get("http://localhost:8000/books/location", isbn, { headers }).then((res) => {
      console.log(res);
    });
    onRefetch();
  };

  return (
    <>
      <div className="text-center py-8 mb-8 text-2xl italic bg-primary text-white font-semibold">
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
      </div>
      {!book.cover && !book.description && (
        <p className="text-center text-4xl text-error">Sorry c'est l'API</p>
      )}
      <div className="flex justify-between mx-4 mb-8 overflow-auto">
        {book.cover && (
          <div className="flex-1">
            <img width="300" src={book.cover} alt="première de couverture" />
          </div>
        )}
        {book.description && (
          <div className="mx-6 flex-1 h-[200px]">
            <p>{book.description}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center my-8">
        {book.isRented === null || !book.isRented ? (
          <Button
            variant="contained"
            color="success"
            onClick={() => onBookRent(book.isbn)}
          >
            Louer (4,99 €/semaine)
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled
            color="success"
            onClick={() => onBookRent(book.isbn)}
          >
            Louer (4,99 €/semaine)
          </Button>
        )}
      </div>
    </>
  );
};
