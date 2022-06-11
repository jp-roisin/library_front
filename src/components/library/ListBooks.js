import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SuccessTag, ErrorTag } from "../ui/Tag";
import { Modal } from "../ui/Modal";
import { BookInfo } from "./BookInfo";
import axios from "axios";
import { TextField } from "@mui/material";

export const ListBooks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const [bookList, setBookList] = useState({ initial: [], curent: [] });
  const [refetchOnRent, setRefetchOnRent] = useState(false)

  const modalHandler = () => {
    setModalIsOpen((prevValue) => !prevValue);
  };

  const onSearch = (input) => {
    setBookList({
      ...bookList,
      curent: bookList.initial.filter((element) => {
        if (input.target.value === "") {
          return element;
        } else {
          let titleCheck = false;
          let authorCheck = false;
          if (element.title) {
            titleCheck = element.title
              .toLowerCase()
              .includes(input.target.value.toLowerCase());
          }
          if (element.author) {
            authorCheck = element.author
              .toLowerCase()
              .includes(input.target.value.toLowerCase());
          }
          return titleCheck || authorCheck;
        }
      }),
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/books/all").then((res) => {
      const filterdResponse = res.data.BooksAll.sort((a, b) =>
        a.title < b.title ? -1 : a.title > b.title ? +1 : 0
      );
      setBookList({ initial: filterdResponse, curent: filterdResponse });
      console.log("just fetched all books")
    });
  }, [refetchOnRent]);

  return (
    <>
      <>
        {modalIsOpen && (
          <Modal onCloseModal={modalHandler}>
            <BookInfo book={{ ...selectedBook }} onRefetch={() => setRefetchOnRent(prev => !prev)} />
          </Modal>
        )}
      </>
      <div className="flex justify-center mb-6">
        <div className="w-[300px]">
          <TextField
            name="filter"
            fullWidth
            label="Search"
            onChange={onSearch}
          />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell align="left">Auteur</TableCell>
              <TableCell align="left">Genre</TableCell>
              <TableCell align="left">Disponibilité</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookList.length !== 0 &&
              bookList.curent.map((item) => (
                <>
                  <TableRow
                    key={item.id}
                    sx={{
                      cursor: "pointer",
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                    onClick={() => {
                      setSelectedBook(item);
                      setModalIsOpen(true);
                    }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {item.title}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {item.author}
                    </TableCell>
                    <TableCell align="left">{item.category}</TableCell>
                    <TableCell align="left">
                      {item.isRented === null || !item.isRented ? (
                        <SuccessTag />
                      ) : (
                        <ErrorTag />
                      )}
                    </TableCell>
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
