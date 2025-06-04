import type { AuthorInterface } from "../../types/author.interface.ts";

export function Author({ authors }: { authors: AuthorInterface[] | string }) {
  function checkAuthor(author: AuthorInterface | string, index: number) {
    return typeof author === "string" ? (
      <span key={author} className="ps-1 pe-1">
        {author}
        {index < authors.length - 1 ? "," : ""}
      </span>
    ) : (
      <span key={author._id} className="ps-1 pe-1">
        {author.author}
        {index < authors.length - 1 ? "," : ""}
      </span>
    );
  }
  return (
    <>
      {Array.isArray(authors) && authors.length > 0
        ? authors.map((author: AuthorInterface | string, index: number) =>
            checkAuthor(author, index),
          )
        : null}
    </>
  );
}
