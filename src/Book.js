import React from "react";

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = () => {
    alert("Helllo");
  };

  const complexExample = (author, tit) => {
    console.log(author);
    console.log(tit);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Referance example
      </button>
      <button type="button" onClick={() => complexExample(author, title)}>
        complex eaxample
      </button>
      {/* {children} */}
    </article>
  );
};

export default Book;
