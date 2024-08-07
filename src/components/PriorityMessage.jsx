import React from "react";
import TabHeader from "./TapHeader/TabHeader";

const PriorityMessage = () => {
  let data = [
    {
      id: "1",
      title: "Bill Payments Report - Korea_Bill",
    },
  ];
  return (
    <div>
      <div>
        <TabHeader title="Priority Message" icon={false} />
        {data.map((val) => {
          return (
            <div key={val.id} style={{ display: "flex", padding: "15px" }}>
              <p className="grey_title" style={{ flex: 2 }}>
                {val.title}
              </p>
              <a href="/">All Message</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriorityMessage;
