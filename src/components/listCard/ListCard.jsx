import { Col, Row } from "antd";
import CardItem from "../cardItem/CardItem";
import {} from "@ant-design/icons";
import { useEffect, useState } from "react";
import userApi from "../../api/userApi";
const App = () => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    const getListUser = async () => {
      const newListUser = await userApi.getAllUser().then((user) => user.data);
      setListUser(newListUser);
      console.log(newListUser);
    };
    getListUser();
  }, []);
  const listIcon = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
      title: "All user",
      value: "20",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/925/925014.png",
      title: "Today's revenue",
      value: "3000 $",
    },
    {
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png",
      title: "Quantity product",
      value: "90",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1539/1539766.png",
      title: "Total capital",
      value: "6600 $",
    },
  ];

  return (
    <Row gutter={24}>
      <Col
        md={{
          span: 6,
        }}
        sm={{
          span: 12,
        }}
        span={24}
      >
        <CardItem theme={listIcon[0]} value={listUser.length} />
      </Col>
      <Col
        md={{
          span: 6,
        }}
        sm={{
          span: 12,
        }}
        span={24}
      >
        <CardItem theme={listIcon[1]} value={"3000 $"} />
      </Col>
      <Col
        md={{
          span: 6,
        }}
        sm={{
          span: 12,
        }}
        span={24}
      >
        <CardItem theme={listIcon[2]} value={100} />
      </Col>
      <Col
        md={{
          span: 6,
        }}
        sm={{
          span: 12,
        }}
        span={24}
      >
        <CardItem theme={listIcon[3]} value={`6000 $`} />
      </Col>
    </Row>
  );
};

export default App;
