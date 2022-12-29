import React, { useRef, useEffect } from "react";

const Form = ({
  title,
  setTitle,
  content,
  setContent,
  notes,
  setNotes,
  navigator,
}) => {
  const refContainer = useRef();
  useEffect(() => {
    refContainer.current.focus();
    console.log(refContainer.current);
  }, []);

  const addHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      const note = { title, content, id: new Date().getTime().toString() };
      setNotes([...notes, note]);
      setTitle("");
      setContent("");
      navigator("/main");
    } else {
      window.alert("Empty fields. Try again!");
    }
  };

  return (
    <form className="form">
      <h2>{title ? title : "New Note"}</h2>
      <input
        type="text"
        ref={refContainer}
        placeholder="Title"
        className="note-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note-content"
        placeholder="Write Note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="note-buttons">
        <button
          className="back-button"
          onClick={() => {
            setTitle("");
            setContent("");
            navigator("/main");
          }}
        >
          Back
        </button>
        <button className="green-button" onClick={addHandler}>
          Add Note
        </button>
      </div>
    </form>
  );
};

export default Form;
