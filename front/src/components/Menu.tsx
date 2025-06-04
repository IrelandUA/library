import { BooksLength } from "../features/booksLength/BooksLength.tsx";
import { ButtonListByThousand } from "../features/buttonListByThousand/ButtonListByThousand.tsx";
import { CurrentThousandMenu } from "../features/currentThousandMenu/CurrentThousandMenu.tsx";
import { CheckBooksLength } from "../features/booksLength/checkBooksLength/CheckBooksLength.tsx";
import { GetBooksLength } from "../features/booksLength/getBooksLength/GetBooksLength.tsx";
import { CreateBooksAll } from "../features/books/createBooksAll/CreateBooksAll.tsx";
import { CreateBooksStop } from "../features/books/createBooksStop/CreateBooksStop.tsx";
import { ParsBooksAll } from "../features/parsers/parsBooksAll/ParsBooksAll.tsx";
import { ParsBooksStop } from "../features/parsers/parsBooksStop/ParsBooksStop.tsx";
import { DeleteBooksAll } from "../features/books/deleteBooksAll/DeleteBooksAll.tsx";

export function Menu() {
  return (
    <>
      <p className="p-box flex flex-align-items">
        <CheckBooksLength />
        <GetBooksLength />
        <CreateBooksAll />
        <CreateBooksStop />
        <ParsBooksAll />
        <ParsBooksStop />
        <div style={{ marginLeft: "auto" }}>
          <DeleteBooksAll />
        </div>
      </p>
      <BooksLength></BooksLength>
      <ButtonListByThousand></ButtonListByThousand>
      <CurrentThousandMenu></CurrentThousandMenu>
    </>
  );
}
