import React from "react";
import TabHeader from "./TapHeader/TabHeader";
import { Row, Col } from "react-bootstrap";

const PendingTask = () => {
  let data = [
    {
      id: 1,
      count: "687",
      title: "Pending Send to Bank",
      details: [
        {
          count: "687",
          desc: "Payments",
        },
      ],
    },
    {
      id: 2,
      count: "8",
      title: "Pending Send to Bank",
      details: [
        {
          count: "5",
          desc: "Payments",
        },
        {
          count: "3",
          desc: "Payments",
        },
      ],
    },
    {
      id: 3,
      count: "830",
      title: "Pending Send to Bank",
      details: [
        {
          count: "553",
          desc: "Payments",
        },
        {
          count: "11",
          desc: "Payments",
        },
        {
          count: "263",
          desc: "Payments",
        },
      ],
    },
  ];
  return (
    <div>
      <TabHeader title="1555 Pending Tasks" icon={false} />

      <div
        style={{
          width: "100px",
          borderBottom: "2px solid #3495eb",
          color: "#3495eb",
        }}
      >
        CASH
      </div>
      <div style={{ display: "flex", gap: "30px", padding: "15px" }}>
        {data.map((val) => {
          return (
            <div key={val.id}>
              <div>
                <h4 className="grey_title">{val.count}</h4>
                <p className="grey_title" style={{ fontSize: "14px" }}>
                  {val.title}
                </p>
                <div>
                  {val.details.map((res) => {
                    return (
                      <Row>
                        <Col sx={1}>
                          <p
                            className="blue_sub_title_left blue_sub_title"
                            style={{ fontSize: "12px" }}
                          >
                            {res.count}
                          </p>
                        </Col>
                        <Col sx={11}>
                          <p
                            style={{ fontSize: "12px" }}
                            className="blue_sub_title"
                          >
                            {res.desc}
                          </p>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="grey_title" style={{ fontSize: "10px" }}>
          Last Updated 17/07/2024 10:12:04 AM
        </p>
      </div>
    </div>
  );
};

export default PendingTask;
