import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import "./style.css";
const App = ({ onSubmit, onLogin }) => {
  const pathname = window.location.pathname;

  const onFinish = (values) => {
    if (onSubmit) onSubmit(values);
    if (onLogin) onLogin(values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {pathname === "/signup" && (
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="Email"
          />
        </Form.Item>
      )}

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          className="remember_form"
          name="remember"
          valuePropName="checked"
          noStyle
        >
          <Checkbox>
            {pathname === "/signup"
              ? `I agree the Terms and Conditions`
              : "Remember me"}
          </Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ marginRight: "10px" }}
        >
          {pathname === "/signup" ? "Sign up" : "Log in"}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
