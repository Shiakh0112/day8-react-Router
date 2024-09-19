import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

function Nav() {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Home</button>{" "}
          </li>
          <li>
            <button onClick={() => navigate("/about")}>About</button>{" "}
          </li>
          <li>
            <button onClick={() => navigate("/product")}>Product</button>{" "}
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact</button>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
