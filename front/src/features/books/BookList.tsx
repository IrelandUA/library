import { useSelector } from "react-redux";
import type { BooksStateInterface } from "../../types/dataState.interface.ts";
import type { RootState } from "../../app/store";
import { ParsBookById } from "../parsers/parsBookById/ParsBookById.tsx";
import { Author } from "../author/Author.tsx";

export function BookList() {
  const books: BooksStateInterface = useSelector(
    (state: RootState) => state.books,
  );

  return (
    <div className="p-box">
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Number</th>
            <th>Author</th>
            <th>Title</th>
            <th>Image</th>
            <th>More info</th>
            <th>Read now</th>
            <th>Pars by ID</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(books.data) && books.data.length > 0 ? (
            books.data.map((book, index) => {
              if (!book) return null;
              return (
                <tr key={book._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{book.number}</td>
                  <td>
                    <Author authors={book.author}></Author>
                  </td>
                  <td>{book.title}</td>
                  <td>
                    <a href={book.image} target="_blank" rel="noreferrer">
                      {book.image.slice(0, 30)}
                    </a>
                  </td>
                  <td>
                    <a
                      href={book.more_info_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {book.more_info_url.slice(0, 30)}
                    </a>
                  </td>
                  <td>
                    <a
                      href={book.read_now_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {book.read_now_url.slice(0, 30)}
                    </a>
                  </td>
                  <td className="text-center">
                    {book._id.length > 0 ? (
                      <ParsBookById id={book._id} />
                    ) : null}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No books available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
