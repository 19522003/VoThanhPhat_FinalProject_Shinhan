import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function ProfileBox({ user }) {
  return (
    <div className="profileBox">
      <h5>Profile Information</h5>
      <p>
        <span>Full Name: </span>
        {user.username}
      </p>
      <p>
        <span>Mobile: </span>
        (44) 123 1234 123
      </p>
      <p>
        <span>Email: </span>
        {user.email}
      </p>
      <p>
        <span>Social: </span>
        <Link>
          <TwitterOutlined
            style={{
              color: "#1890ff",
              padding: "0 10px",
            }}
          />
        </Link>
        <Link>
          {" "}
          <InstagramOutlined
            style={{
              color: "rgb(225, 48, 108)",
              padding: "0 10px",
            }}
          />
        </Link>
        <Link>
          {" "}
          <FacebookOutlined
            style={{
              color: "rgb(52, 78, 134)",
              padding: "0 10px",
            }}
          />
        </Link>
      </p>
    </div>
  );
}

ProfileBox.propTypes = {};

export default ProfileBox;
