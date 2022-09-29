import "../styles/notes.css";

export const Navbar = () => {
    return (
        <div className="page-content container note-has-grid">
            <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
                <li className="nav-item">
                    <a
                        className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
                        id="all-category"
                    >
                        <i className="icon-layers mr-1"></i>
                        <span className="d-none d-md-block">All Notes</span>
                    </a>
                </li>
                <li className="nav-item ms-auto">
                    <a
                       href=""
                        className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
                        id="add-notes"
                    >
                        {" "}
                        <i className="icon-note m-1"></i>
                        <span className="d-none d-md-block font-14">Add Notes</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
