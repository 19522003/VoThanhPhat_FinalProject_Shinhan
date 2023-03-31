import React, { useState } from "react";
import userApi from "../api/userApi";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import "../style.css";
import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [boxShadow] = useState("none");
  const [color] = useState("white");
  const navigate = useNavigate();

  const openNotification = (type) => {
    if (type === "success") {
      notification.open({
        message: "Success",
        description: "Sign Up Success",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
    }
    if (type === "error") {
      notification.open({
        message: "Error",
        description: "Sign Up Failed",
        icon: <FrownOutlined style={{ color: "red" }} />,
      });
    }
  };
  const handleSubmit = (values) => {
    console.log(values);
    userApi
      .register(values)
      .then(() => {
        openNotification("success");
        navigate("/", {
          state: {
            ...values,
          },
        });
      })
      .catch(() => {
        openNotification("error");
      });
  };
  return (
    <div style={{ padding: "11px" }}>
      <div className="signUp" style={{ color: color, textAlign: "center" }}>
        <Header boxShadow={boxShadow} color={color}></Header>
        <h1>Sign Up</h1>
        <p>Create new account for user management</p>
      </div>
      <div className="contain_signUp">
        <h3>Enter Your Information</h3>
        <Form onSubmit={handleSubmit}></Form>
      </div>
    </div>
  );
}

export default Register;
