import {
  AreaChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  SmileOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import userApi from "../api/userApi";
import UserTable from "../components/table/UserTable";
import DashboardContent from "../components/dashboardContent/DashboardContent";
import "../style.css";
import Profile from "../components/profile/Profile";
import ProductTable from "../components/productTable/ProductTable";
import useClock from "../hooks/useClock";

const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [listUser, setListUser] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [filter, setFilter] = useState([...listUser]);
  const test = localStorage.getItem("isAdmin") === "true" ? true : false;
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    userApi.logout();
    window.location.href = "/";
    localStorage.clear();
  };
  const handleFilter = (id) => {
    const newFilter = listUser.filter((user) => user._id !== id);
    setFilter(newFilter);
    console.log(filter);
  };
  useEffect(() => {
    const getListUser = async () => {
      const newListUser = await userApi.getAllUser().then((user) => user.data);
      setListUser(newListUser);
    };
    getListUser();
  }, [filter]);

  const componentsSwitch = (key) => {
    switch (key) {
      case "1":
        return (
          <div>
            <DashboardContent></DashboardContent>
          </div>
        );
      case "2":
        return <UserTable listUser={listUser} handleFilter={handleFilter} />;
      case "3":
        if (test) return <ProductTable />;
      case "4": {
        return <Profile></Profile>;
      }
      default:
        break;
    }
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { timeString } = useClock();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <div
              className="logo"
              style={{
                background: "none",
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                padding: "10px 0",
              }}
            >
              <SmileOutlined /> UserM
            </div>
            <Menu
              theme="dark"
              mode="inline"
              onClick={(e) => setSelectedMenuItem(e.key)}
              defaultSelectedKeys={selectedMenuItem}
            >
              <Menu.Item key="1">
                <AreaChartOutlined />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <UserOutlined />
                <span>User Table</span>
              </Menu.Item>
              {test && (
                <Menu.Item key="3">
                  <ShoppingCartOutlined />
                  <span>Product</span>
                </Menu.Item>
              )}
              <Menu.Item key="4">
                <ProfileOutlined />
                <span>Profile</span>
              </Menu.Item>
            </Menu>
          </div>
          <Button
            style={{
              borderRadius: "0px",
              border: "1px solid #001529",
            }}
            onClick={handleLogout}
          >
            Log out
          </Button>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <span
              style={{
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              Hi, <span style={{ color: "#1677ff" }}>{username}</span>
            </span>
          </div>

          <p>
            <span style={{ color: "blue", fontWeight: "600" }}>Today is: </span>
            {timeString}
          </p>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {componentsSwitch(selectedMenuItem)}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
