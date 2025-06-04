import { Header } from "./components/Header.tsx";
import { BookList } from "./features/books/BookList.tsx";
import { Menu } from "./components/Menu.tsx";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <BookList />
    </>
  );
}

export default App;
