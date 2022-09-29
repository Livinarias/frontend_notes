import { TemplateCard } from "./templateCard";
import "../styles/notes.css";

export const CardNote = () => {
  return (
    <div className="tab-content bg-transparent">
      <div id="note-full-container" className="note-has-grid row">
        <TemplateCard />
      </div>
    </div>
  );
};

