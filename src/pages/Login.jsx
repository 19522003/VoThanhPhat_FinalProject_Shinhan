import { FrownOutlined } from "@ant-design/icons";
import { Col, notification, Row } from "antd";
import React from "react";
import userApi from "../api/userApi";
import login_image from "../assets/login_image.png";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import "../style.css";
function Login(props) {
  const openNotification = (type) => {
    if (type === "error") {
      notification.open({
        message: "Error",
        description: "Wrong username or password",
        icon: <FrownOutlined style={{ color: "red" }} />,
      });
    }
  };
  function handleLogin(values) {
    console.log(values);
    userApi
      .login(values)
      .then((res) => {
        localStorage.setItem("userId", res.data._id);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("isAdmin", res.data.isAdmin);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);

        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(console.log(error));
        openNotification("error");
      });
  }

  return (
    <>
      <Header></Header>
      <Row style={{ paddingTop: "40px" }}>
        <Col
          md={{
            offset: 3,
            span: 7,
          }}
          span={24}
          className="col_login"
        >
          <h1>Sign In</h1>
          <p>Enter your email and password to sign in</p>
          <Form onLogin={handleLogin}></Form>
        </Col>

        <Col
          md={{
            span: 12,
            offset: 2,
          }}
          span={24}
        >
          <div className="login_image">
            <img src={login_image} alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
