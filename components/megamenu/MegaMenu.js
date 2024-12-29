import Link from "next/link";
import "./megaMenu.css";

const MegaMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link mx-2 active" href="/">
                Home
              </Link>
              {/* <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link mx-2" href="#">Features</a> */}
              <Link className="nav-link mx-2 " href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 " href="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-2"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <div
                className="dropdown-menu  mt-4 "
                aria-labelledby="navbarDropdownMenuLink"
              >
                                  <span className="dropdown-menu-arrow"></span>

                <div className="container">
                  <div className="row">
                    {/* Category 1 */}
                    <div className=" col-md-6">
                      <h6 className="dropdown-header">Category 1</h6>
                      <Link href="#" className="dropdown-item">
                        Product 1
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Product 2
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Product 3
                      </Link>
                    </div>
                    {/* Category 2 */}
                    <div className=" col-md-6">
                      <h6 className="dropdown-header">Category 2</h6>
                      <Link href="#" className="dropdown-item">
                        Service 1
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Service 2
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Service 3
                      </Link>
                    </div>
                    {/* Category 3 */}
                    <div className=" col-md-6">
                      <h6 className="dropdown-header">Category 3</h6>
                      <Link href="#" className="dropdown-item">
                        Feature 1
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Feature 2
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Feature 3
                      </Link>
                    </div>
                    {/* Category 4 */}
                    <div className=" col-md-6">
                      <h6 className="dropdown-header">Category 4</h6>
                      <Link href="#" className="dropdown-item">
                        Other 1
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Other 2
                      </Link>
                      <Link href="#" className="dropdown-item">
                        Other 3
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
