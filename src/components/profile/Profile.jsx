import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import userApi from "../../api/userApi";
import ConversationBox from "../conversationBox/ConversationBox";
import PlatFormBox from "../platFormBox/PlatFormBox";
import ProfileBox from "../profileBox/ProfileBox";
import "./style.css";
function Profile() {
  const [user, setUser] = useState({});
  const id = localStorage.getItem("userId");
  useEffect(() => {
    const getUser = async () => {
      const newUser = await userApi.getUser(id).then((data) => data.data);
      console.log(newUser);
      setUser(newUser);
    };
    getUser();
  }, []);
  return (
    <div>
      <div className="boxInfo">
        <Image
          style={{ borderRadius: "10px" }}
          width={100}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div className="nameInfo">
          <p>{user.username}</p>
          <p className="nameInfo_role">{user.isAdmin ? "Admin" : "User"}</p>
        </div>
      </div>
      <div className="containInfo">
        <Row gutter={24}>
          <Col
            md={{
              span: 8,
            }}
            span={24}
          >
            <div className="infoContain">
              <PlatFormBox></PlatFormBox>
            </div>
          </Col>
          <Col
            md={{
              span: 8,
            }}
            span={24}
          >
            <div className="infoContain">
              <ProfileBox user={user}></ProfileBox>
            </div>
          </Col>
          <Col
            md={{
              span: 8,
            }}
            span={24}
          >
            <div className="infoContain">
              <ConversationBox></ConversationBox>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
