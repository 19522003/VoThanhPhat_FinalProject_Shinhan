import { LoginOutlined, PhoneOutlined, TeamOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header({ boxShadow, color }) {
  return (
    <div className="Header" style={{ boxShadow: boxShadow, color: color }}>
      <div className="header_logo">User Management</div>
      <ul className="header_menu">
        <li className="header_menu-item">
          <Link to={"/"}>
            <LoginOutlined style={{ color: color }} />
            <span style={{ color: color }}>Sign In</span>
          </Link>
        </li>
        <li className="header_menu-item">
          <Link to={"/signup"}>
            <TeamOutlined style={{ color: color }} />
            <span style={{ color: color }}>Sign Up</span>
          </Link>
        </li>
      </ul>
      <div className="header_contact">
        <div className="header_contact_contain">
          <PhoneOutlined />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
