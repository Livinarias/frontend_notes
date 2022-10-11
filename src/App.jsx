import { useState } from 'react';
import { UseNotes } from './hooks/useNotes';
import { MainPage, NotesPage } from './pages';
import  { Noteget }  from './hooks';
import './App.css'


export const App = () => {

  const [change, setchange] = useState("MainPage");

  let { get } = Noteget();

  return (
    <UseNotes>
      { change === "NotesPages" ? <NotesPage props={get}/> : <MainPage/>}
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
