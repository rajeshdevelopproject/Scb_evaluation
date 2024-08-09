import React from "react";
import Header from "../Header/Header";
import PendingApproval from "../PendingApproval";
import PriorityMessage from "../PriorityMessage";
import QuickNavigation from "../QuickNavigation";
import PendingTask from "../PendingTask";
import PaymentsMyview from "../PaymentsMyview";
import { Row, Col, Button } from "react-bootstrap";
import CarousalImplimentation from "../CarousalImplimentation";
import { HiOutlineSpeakerphone } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <Button className="feedback_but">
        <HiOutlineSpeakerphone />
        &nbsp;Give Feedback
      </Button>
      <div style={{ padding: "3px 0px", width: "96%", marginLeft: "25px" }}>
        <div className="mt-3 mb-3" style={{ textAlign: "start" }}>
          <Button style={{ width: "100px" }}>HOME</Button>
        </div>

        <Row>
          <Col xs={8} className="outline_border">
            <Row>
              <Col xs={6} className="outline_border sc_border_top_none">
                <PendingApproval />
              </Col>
              <Col xs={6} className="outline_border sc_border_top_none">
                <PriorityMessage />
              </Col>
            </Row>
            <Row>
              <Col
                xs={6}
                className="outline_border sc_border_top_none"
                style={{ borderBottom: "none", borderLeft: "none" }}
              >
                <PendingTask />
              </Col>
              <Col xs={6} className="outline_border sc_border_top_none">
                <PaymentsMyview />
              </Col>
            </Row>
          </Col>
          <Col
            x={4}
            className="outline_border"
            style={{ paddingTop: "10px", borderLeft: "none" }}
          >
            <QuickNavigation />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
