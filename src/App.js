import "./App.css";
import { data } from "./books";
import Book from "./Book";

const Booklist = () => {
  return (
    <>
      <section className="booklist">
        {data.map((book, index) => {
          return (
            <>
              <Book key={index} {...book}></Book>
            </>
          );
        })}
      </section>
    </>
  );
};

function App() {
  return (
    <>
      <Booklist />
    </>
  );
}
export default App;
