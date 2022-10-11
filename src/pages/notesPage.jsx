import { CardNote, Navbar } from "../hooks";
import "../styles/notes.css";

export const NotesPage = (props) => {
  return (
    <div className="page-content container note-has-grid">
      <Navbar/>
      <CardNote props={props}/>
    </div>
  );
};
