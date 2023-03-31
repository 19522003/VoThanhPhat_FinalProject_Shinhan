import { Col, Row } from "antd";
import React, { useState } from "react";
import { UserData } from "../../Data";
import BarChart from "../barChart/BarChart";
import LineChart from "../lineChart/LineChart";
import ListCard from "../listCard/ListCard";
import CaroulselItem from "../carouselItem/CarouselItem";
import Banner from "../banner/Banner";

function DashboardContent(props) {
  const options1 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Bar chart: Total user all year",
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: " Line chart: Total user all year",
      },
    },
  };
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <ListCard></ListCard>
      <Row gutter={24}>
        <Col
          md={{
            span: 12,
          }}
          span={24}
        >
          <BarChart options={options1} chartData={userData} />
        </Col>
        <Col
          md={{
            span: 12,
          }}
          span={24}
        >
          <LineChart options={options2} chartData={userData} />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col
          md={{
            span: 12,
          }}
          span={24}
        >
          <CaroulselItem />
        </Col>
        <Col
          md={{
            span: 12,
          }}
          span={24}
        >
          <div
            style={{
              textAlign: "center",
              borderRadius: "12px",
              boxShadow: "0 20px 27px rgb(0 0 0/5%)",
              padding: "20px",
            }}
          >
            {" "}
            <Banner></Banner>
          </div>
        </Col>
      </Row>
    </div>
  );
}

DashboardContent.propTypes = {};

export default DashboardContent;
