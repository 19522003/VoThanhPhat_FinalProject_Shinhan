import { Avatar, Col, Row } from "antd";
import React from "react";
import "./style.css";
export default function ConversationBox() {
  return (
    <div className="conversation">
      <h5 style={{ fontSize: "14px" }}>Conversation</h5>
      <div className="conversations_user">
        <Row gutter={24} align="middle">
          <Col span={4}>
            <Avatar
              size={64}
              src={
                "	https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg"
              }
            />
          </Col>
          <Col span={16}>
            <div className="user_box">
              <p className="user_box_name">Sophie B.</p>
              <p>Hi! I need more information...</p>
            </div>
          </Col>
          <Col span={4}>
            <button>REPLY</button>
          </Col>
        </Row>
      </div>
      <div className="conversations_user">
        <Row gutter={24} align="middle">
          <Col span={4}>
            <Avatar
              size={64}
              src={
                "https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-4.03453a44.jpg"
              }
            />
          </Col>
          <Col span={16}>
            <div className="user_box">
              <p className="user_box_name">Sophie B.</p>
              <p>About files I can…</p>
            </div>
          </Col>
          <Col span={4}>
            <button>REPLY</button>
          </Col>
        </Row>
      </div>
      <div className="conversations_user">
        <Row gutter={24} align="middle">
          <Col span={4}>
            <Avatar
              size={64}
              src={
                "	https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-5.e725aef8.jpeg"
              }
            />
          </Col>
          <Col span={16}>
            <div className="user_box">
              <p className="user_box_name">Sophie B.</p>
              <p>Have a great afternoon…</p>
            </div>
          </Col>
          <Col span={4}>
            <button>REPLY</button>
          </Col>
        </Row>
      </div>
      <div className="conversations_user">
        <Row gutter={24} align="middle">
          <Col span={4}>
            <Avatar
              size={64}
              src={
                "https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-6.b75146da.jpeg"
              }
            />
          </Col>
          <Col span={16}>
            <div className="user_box">
              <p className="user_box_name">Sophie B.</p>
              <p>Awesome work, can you…</p>
            </div>
          </Col>
          <Col span={4}>
            <button>REPLY</button>
          </Col>
        </Row>
      </div>
      <div className="conversations_user">
        <Row gutter={24} align="middle">
          <Col span={4}>
            <Avatar
              size={64}
              src={
                "	https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-2.efe2e35c.jpg"
              }
            />
          </Col>
          <Col span={16}>
            <div className="user_box">
              <p className="user_box_name">Sophie B.</p>
              <p>Hi! I need more information...</p>
            </div>
          </Col>
          <Col span={4}>
            <button>REPLY</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
