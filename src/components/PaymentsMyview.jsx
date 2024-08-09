import React from "react";
import TabHeader from "./TapHeader/TabHeader";
import { Col, Row } from "react-bootstrap";
import Chart from "react-apexcharts";
import BarCharts from "./BarCharts";
import { LuRefreshCw } from "react-icons/lu";

const PaymentsMyview = () => {
  return (
    <div>
      <div>
        <TabHeader title="Payments in Last 7 Days(My view)" icon={true} />
        <Row style={{ padding: "0px 12px" }}>
          <Col xs={6} style={{ backgroundColor: "lightgray" }}>
            Client Workflow
          </Col>
          <Col xs={6} style={{ borderBottom: "2px solid #3495eb" }}>
            Bank Workflow
          </Col>
        </Row>
        <Row className="p-2" style={{ alignItems: "end" }}>
          <Col xs={6} style={{ display: "grid", justifyContent: "center" }}>
            <BarCharts
              value={25}
              color={"lightgreen"}
              label={"Processed by Bank"}
            ></BarCharts>
          </Col>
          <Col xs={6} style={{ display: "grid", justifyContent: "center" }}>
            <BarCharts
              value={14}
              color={"#03b6fc"}
              label={"Rejected by Bank"}
            ></BarCharts>
          </Col>
        </Row>
      </div>
      <div>
        <p className="grey_title" style={{ fontSize: "10px" }}>
          <LuRefreshCw />
          &nbsp;Last Updated 17/07/2024 10:12:04 AM
        </p>
      </div>
    </div>
  );
};

export default PaymentsMyview;
