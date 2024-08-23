import React, { useEffect, useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import useFetch from "../customHooks/useFetch";

const Prev = () => {
  return <GrFormPrevious className="arrow_icon"></GrFormPrevious>;
};
const NextImg = () => {
  return <GrFormNext className="arrow_icon"></GrFormNext>;
};

const CarousalImplimentation = () => {
  const { resData, isLoading, dataFetch } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    dataFetch("carousal");
  }, []);

  useEffect(() => {
    setData(resData);
  }, [resData]);

  return (
    <div>
      {isLoading ? (
        <div>Page is Loading</div>
      ) : (
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
                          {val.details.map((res, index) => {
                            return (
                              <Row key={`${index}title`}>
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
      )}
    </div>
  );
};

export default CarousalImplimentation;
