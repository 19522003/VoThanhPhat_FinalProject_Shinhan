import { Space, Table, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";
import UpdateModal from "../../components/modal/UpdateModal";
import { DeleteOutlined } from "@ant-design/icons";
import "./style.css";

const App = ({ listUser, handleFilter }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
  const confirm = (id) => {
    console.log(id);
    userApi
      .deleteUser(id)
      .then(() => {
        if (localStorage.getItem("userId") === id) {
          localStorage.clear();
          window.location.href = "/";
        }
        handleFilter(id);
        message.success("Success");
      })
      .catch((error) => {
        console.log(error);
        message.error("You don't have permission to delete this user");
      });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "name",
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        {
          text: "Admin",
          value: "admin",
        },
        {
          text: "User",
          value: "user",
        },
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.key === localStorage.getItem("userId") && (
            <UpdateModal
              keyId={record.key}
              handleEdit={handleEdit}
            ></UpdateModal>
          )}
          {(isAdmin || record.key === localStorage.getItem("userId")) && (
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => confirm(record.key)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Link href="#" style={{ color: "red" }}>
                <DeleteOutlined /> Delete
              </Link>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];

  const handleEdit = (id, value) => {
    console.log(id, value);
    userApi
      .editUser(id, value)
      .then(() => {
        handleFilter(id);
        localStorage.setItem("username", value.username);
        localStorage.setItem("email", value.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const data = listUser.map((item) => {
    return {
      ...item,
      key: item._id,
      role: item.isAdmin ? "admin" : "user",
    };
  });

  return <Table columns={columns} dataSource={data} />;
};

export default App;
