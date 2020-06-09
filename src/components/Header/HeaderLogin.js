import React from "react";
import "../Header/Header.css"
function Header() {
  return (
    <nav className="navbar navbar-light bg-success" id="navbar">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">User Login</span>
      </div>
    </nav>
  );
}
export default Header;