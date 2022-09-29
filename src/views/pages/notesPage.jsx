import { CardNote, Navbar } from "../hooks";
import "../styles/notes.css";

export const NotesPage = () => {
  return (
    <div className="page-content container note-has-grid">
      <Navbar/>
      <CardNote/>
    </div>
  );
};
