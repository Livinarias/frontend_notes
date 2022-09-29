import { useState } from 'react';
import { UseNotes } from './views/hooks/useNotes';
import { MainPage, NotesPage } from './views/pages/';
import './App.css'

export const App = () => {

  const [change, setchange] = useState("MainPage");
  console.log(change);
  return (
    <UseNotes>
      { change === "NotesPages" ? <NotesPage /> : <MainPage/>}
      <div className="main_card">
      <button 
        onClick={() => setchange("MainPage")}
        >
        Inicio
      </button>
      <button onClick={() => setchange("NotesPages")}>
          Agregar una nota
        </button>
      </div>
    </UseNotes>
  )
 
}
