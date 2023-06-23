import React from "react";
import s from "./Header.module.css";
import logo from "../../static/logo.svg"
const Header = () => {
  return (
    <header>
      <nav className={s.navbar}>
        <ol className="ml-3 mt-2 mb-2 mr-2 space-x-1 md:space-x-3">
          <li>
            <div className="flex items-start">
              <a href="/general">
                <img src={logo} alt="Tutorialspoint" className="w-10" />
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
