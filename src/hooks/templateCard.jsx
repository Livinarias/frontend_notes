//componente template notas
import { useCallback, useState } from "react";
import { UseModalEdit } from "./useModalEdit";
import "../styles/notes.css";


export const TemplateCard = ({ props }) => {

  const { props: dataProps } = props;
  const { props: dataApi } = dataProps;

  const [popup, setpopup] = useState(false);

  /*const removeNote = useCallback(() => {
      first
    },
    [second],
  )*/
  return (
    <>
      {dataApi.data[0].map((result) =>
        <div
          key={result.title}
          className="col-md-4 single-note-item">
          <div
            key={result.title}
            className="card card-body">
            <span className="side-stick"></span>
            <h5  
              className="note-title text-truncate w-80 mb-0"
              data-noteheading="Book a Ticket for Movie"
            >
              {result.title}
            </h5>
            <p
              className="note-date font-12 text-muted"
            >
              {result.date}
            </p>
            <div className="note-content">
              <p
                className="note-inner-content text-muted"
              >
                {result.description}
              </p>
              <span>
                {result.name},{result.age} años
              </span>
            </div>
            <div className="d-flex align-items-center">
              <button 
                onClick={() => setpopup(true)}
                className="mr-1 p-1">
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="mr-1 p-1">
                <i className="fa fa-trash remove-note"></i>
              </button>
            </div>
          </div>
        </div>
      )
    }
    {popup === true ? <UseModalEdit
                        onClose={() => setpopup(false)}
                        //param={}
                        show={popup}/>
                    : <span/>
    }
    </>
  );
};
