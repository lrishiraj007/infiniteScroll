import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  let title = capitalize(
    location.pathname.substring(1, location.pathname.length)
  );
  if (location.pathname === "/home") {
    title = "Contact List";
  }
  const renderLogout = () => {
    if (location.pathname === "/home") {
      return (
        <div className="ml-auto">
          <button className="btn btn-danger" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      );
    }
  };
  const handleLogout = () => {
    console.log("logout");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">{props.title || title}</span>
        {renderLogout()}
      </div>
    </nav>
  );
}
export default Header;
