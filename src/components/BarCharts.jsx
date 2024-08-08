import React from "react";

const BarCharts = ({ value, color, label }) => {
  return (
    <div style={{ width: "30px" }}>
      <span>{value}</span>
      <div
        className="barcharts_div"
        style={{ height: value * 4, backgroundColor: color, width: "30px" }}
      ></div>
      <span className="bar_label">{label}</span>
    </div>
  );
};

export default BarCharts;
