import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Prev = () => {
  return (
    <GrFormPrevious
      style={{ color: "gray", width: "40px", height: "40px" }}
    ></GrFormPrevious>
  );
};
const NextImg = () => {
  return (
    <GrFormNext
      style={{ color: "gray", width: "40px", height: "40px" }}
    ></GrFormNext>
  );
};

const CarousalImplimentation = () => {
  let data = [
    {
      details: [
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
      ],
    },
    {
      details: [
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
      ],
    },
  ];

  return (
    <div>
      <Carousel prevIcon={Prev()} nextIcon={NextImg()} interval={null}>
        {data.map((obj, ind) => {
          return (
            <Carousel.Item key={`${ind}t`}>
              <Row>
                {obj.details.map((val, i) => {
                  return (
                    <Col
                      xs={4}
                      key={`${i}k`}
                      style={{
                        color: "white",
                      }}
                    >
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
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarousalImplimentation;
