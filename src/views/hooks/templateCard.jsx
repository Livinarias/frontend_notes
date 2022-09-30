export const TemplateCard = () => {
  return (
    <div className="col-md-4 single-note-item">
      <div className="card card-body">
        <span className="side-stick"></span>
        <h5
          className="note-title text-truncate w-75 mb-0"
          data-noteheading="Book a Ticket for Movie"
        >
          Book a Ticket for Movie{" "}
          <i className="point fa fa-circle ml-1 font-10"></i>
        </h5>
        <p className="note-date font-12 text-muted">11 March 2009</p>
        <div className="note-content">
          <p
            className="note-inner-content text-muted"
            data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
          >
            Blandit tempus porttitor aasfs. Integer posuere erat a ante
            venenatis.
          </p>
          <span>Juan,15 años</span>
        </div>
        <div className="d-flex align-items-center">
          <button className="mr-1 p-1">
            <i className="fa fa-edit"></i>
          </button>
          <button className="mr-1 p-1">
            <i className="fa fa-trash remove-note"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
