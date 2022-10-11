import { useState } from "react";
import "../styles/modal.css";
import createNoteApi from "./Notepost";



export const UseModal = (props) => {

  const [change, setchange] = useState({
    name: 'test',
    title: "title",
    age: "age",
    description: "description"

  });

  const {name, title, age, description} = change;

  const onInputChange = ({target}) => {
    const {name, value} = target
    setchange({
      ...change,
      [name]: value
    });
  }

  const sendData = () => {
    createNoteApi({title, name, description, age})
  }
  
  return (
    
    <div className="modal" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content border-0">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title text-white">Nota</h5>
            <button
              onClick={props.onClose}
              className="close text-black"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="notes-box">
              <div className="notes-content">
                <form action="" id="addnotesmodalTitle">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="note-title">
                        <label>Titulo</label>
                        <input
                          type="text"
                          id="note-has-title"
                          className="form-control"
                          placeholder="Titulo"
                          name="title"
                          value={title}
                          onChange={onInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="note-title">
                        <label>Nombre</label>
                        <input
                          type="text"
                          id="note-has-name"
                          className="form-control"
                          placeholder="nombre"
                          name="name"
                          value={name}
                          onChange={onInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="note-title">
                        <label>Edad</label>
                        <input
                          type="text"
                          id="note-has-age"
                          className="form-control"
                          placeholder="edad"
                          name="age"
                          value={age}
                          onChange={onInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="note-description">
                        <label>Descripción</label>
                        <textarea
                          id="note-has-description"
                          className="form-control"
                          placeholder="Descripción"
                          rows="3"
                          name="description"
                          value={description}
                          onChange={onInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              id="btn-n-save"
              className="float-left btn btn-success"
              onClick={sendData}
            >
              Save
            </button>
            <button
              onClick={props.onClose} 
              className="btn btn-danger">
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
