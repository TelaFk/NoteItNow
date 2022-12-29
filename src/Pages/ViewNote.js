import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewNote = ({
  title,
  setTitle,
  content,
  setContent,
  notes,
  setNotes,
  navigator,
}) => {
  const { id } = useParams();

  useEffect(() => {
    let newNote = notes.find((note) => note.id === id);
    setTitle(newNote.title);
    setContent(newNote.content);
  }, []);

  const updateNote = (e) => {
    e.preventDefault();
    if (title && content) {
      let newNote = {
        title: title,
        content: content,
        id: new Date().getTime().toString(),
      };
      setNotes((notes) => {
        let newNotes = notes.filter((note) => note.id !== id);
        newNotes.push(newNote);
        return newNotes;
      });
      setTitle("");
      setContent("");
      navigator("/main");
    } else {
      window.alert("Empty fields");
    }
  };

  return (
    <form className="form">
      <h2>{title ? title : "New Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-title"
      />
      <textarea
        className="note-content"
        placeholder="Write note"
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
        <button className="green-button" onClick={updateNote}>
          Update
        </button>
      </div>
    </form>
  );
};

export default ViewNote;
