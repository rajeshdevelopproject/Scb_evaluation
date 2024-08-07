import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineExpandAlt } from "react-icons/ai";

const TabHeader = (props) => {
  return (
    <div
      className="tabHeader"
      style={{ color: "white", backgroundColor: "#0c77b9", textAlign: "start" }}
    >
      <div style={{ textTransform: "uppercase", flex: "2" }}>{props.title}</div>
      {props.icon && (
        <>
          <div>
            <BiFilterAlt />
            <AiOutlineExpandAlt />
          </div>
        </>
      )}
    </div>
  );
};

export default TabHeader;
