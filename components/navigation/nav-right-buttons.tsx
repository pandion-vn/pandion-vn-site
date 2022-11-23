import Link from 'next/link';

const NavRightBtn = () => {
  return (
    <div>
      <li className="list-inline-item mb-0">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-link text-decoration-none dropdown-toggle p-0 pe-2"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="uil uil-globe text-muted"></i>
          </button>
          <div
            className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3"
            style={{ width: "140px" }}
          >
            <a className="dropdown-item" href="/en">
              English
            </a>
            <a className="dropdown-item" href="/">
              Tiếng Việt
            </a>
          </div>
        </div>
      </li>
      <li className="list-inline-item mb-0">
        <Link href="#" className="btn btn-icon btn-primary">
          <i className="uil uil-facebook-f icons"></i>
        </Link>
      </li>
      <li className="list-inline-item mb-0">
        <Link href="#" className="btn btn-icon btn-primary">
          <i className="uil uil-linkedin-alt icons"></i>
        </Link>
      </li>
    </div>
  );
};

export default NavRightBtn;
