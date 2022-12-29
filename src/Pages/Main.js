import NewNote from "../SecondaryComponents/NewNote";
import Note from "../SecondaryComponents/Note";

const Main = ({ notes, setNotes, navigator }) => {
  return (
    <div id="container">
      <NewNote />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            {...note}
            notes={notes}
            setNotes={setNotes}
            navigator={navigator}
          />
        );
      })}
    </div>
  );
};

export default Main;
