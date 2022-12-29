import React from "react";

const Note = ({ title, content, id, notes, setNotes, navigator }) => {
  const viewHandler = () => {
    navigator(`/view-note/${id}`);
  };
  const removeNote = (id) => {
    let newNotes = notes.filter((note) => id !== note.id);
    setNotes(newNotes);
  };

  return (
    <div className="note">
      <span className="material-icons" onClick={() => removeNote(id)}>
        close
      </span>
      <div onClick={viewHandler}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <span className="date">{new Date().toLocaleDateString()}</span>
    </div>
  );
};

export default Note;
