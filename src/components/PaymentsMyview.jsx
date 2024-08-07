import React from "react";
import TabHeader from "./TapHeader/TabHeader";
import { Col, Row } from "react-bootstrap";
import Chart from "react-apexcharts";

const PaymentsMyview = () => {
  const Processedseries = [
    {
      name: "",
      data: [30],
    },
  ];
  const Processedoptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Processed by Bank"],
    },
  };
  const Rejectedseries = [
    {
      name: "",
      data: [14],
    },
  ];
  const Rejectedoptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Rejected by Bank"],
    },
  };
  return (
    <div>
      <div style={{ height: "300px" }}>
        <TabHeader title="Payments in Last 7 Days(My view)" icon={true} />
        <Row style={{ padding: "0px 12px" }}>
          <Col xs={6} style={{ backgroundColor: "lightgray" }}>
            Client Workflow
          </Col>
          <Col xs={6} style={{ borderBottom: "2px solid #3495eb" }}>
            Bank Workflow
          </Col>
        </Row>
        <Row className="p-2">
          <Col xs={6}>
            <Chart
              series={Processedseries}
              type="bar"
              options={Processedoptions}
              width="200"
            />
          </Col>
          <Col xs={6}>
            <Chart
              series={Rejectedseries}
              type="bar"
              options={Rejectedoptions}
              width="200"
            />
          </Col>
        </Row>
      </div>
      <div>
        <p className="grey_title" style={{ fontSize: "10px" }}>
          Last Updated 17/07/2024 10:12:04 AM
        </p>
      </div>
    </div>
  );
};

export default PaymentsMyview;
