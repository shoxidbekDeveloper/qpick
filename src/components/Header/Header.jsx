// Import SASS
import "./Header.scss";

// Import BoxIcons
import "boxicons";

// Import NavLink
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="navbar-section">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <NavLink to={"/"}>
              <div className="navbar-brand">
                <h2 className="brand-h2">QPICK</h2>
              </div>
            </NavLink>

            <div className="navbar-filter">
              <box-icon name="mobile-alt"></box-icon>
              <h4 className="navbar-filter-h4">Выбрать модель телефона</h4>
              <select name="" id=""></select>
            </div>
          </div>

          <ul className="nav-list">
            <li className="nav-icon">
              <box-icon name="heart"></box-icon>
            </li>
            <li className="nav-icon">
              <box-icon name="shopping-bag"></box-icon>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Header;
