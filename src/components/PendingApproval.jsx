import React from "react";
import TabHeader from "./TapHeader/TabHeader";

const PendingApproval = () => {
  let data = [
    {
      id: "Q0022706",
      title: "Cut - off time 2 hrs from now",
      subtitle: "KRW 701",
    },
  ];
  return (
    <div>
      <TabHeader title="Payment - Pending Approval" icon={false} />
      {data.map((val) => {
        return (
          <div key={val.id} style={{ padding: "15px" }}>
            <p className="blue_title m-0">
              <b>{val.id}</b>&nbsp;|&nbsp;{val.title}
            </p>
            <h6 className="grey_title">{val.subtitle}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default PendingApproval;
