import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import TabHeader from "./TapHeader/TabHeader";

const QuickNavigation = () => {
  let data = [
    {
      id: "1",
      title: "Create Payments",
      desc: "Make a new domestic or international payment",
    },
    {
      id: 2,
      title: "Create Payments",
      desc: "Make a new domestic or international payment",
    },
    {
      id: 3,
      title: "Create Payments",
      desc: "Make a new domestic or international payment",
    },
    {
      id: 4,
      title: "Create Payments",
      desc: "Make a new domestic or international payment",
    },
  ];

  return (
    <div>
      <div>
        <TabHeader title="Quick Navigation" icon={false} />
        {data.map((val) => {
          return (
            <div
              key={val.id}
              style={{
                display: "flex",
                alignItems: "center",
                height: "60px",
                borderBottom: "1px solid lightgray",
                padding: "15px",
              }}
            >
              <div style={{ flex: 2 }}>
                <p className="blue_title m-0">{val.title}</p>
                <p className="grey_title m-0" style={{ fontSize: "10px" }}>
                  {val.desc}
                </p>
              </div>
              <div style={{ width: "10%", color: "#3495eb" }}>
                <MdOutlineErrorOutline />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickNavigation;
