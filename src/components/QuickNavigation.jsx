import React, { useEffect, useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import TabHeader from "./TapHeader/TabHeader";
import useFetch from "../customHooks/useFetch";

const QuickNavigation = () => {
  const { resData, isLoading, dataFetch } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    dataFetch("quicknavigation");
  }, []);

  useEffect(() => {
    setData(resData);
  }, [resData]);

  return (
    <div>
      <div>
        <TabHeader title="Quick Navigation" icon={false} />
        {isLoading ? (
          <div>Page is Loading</div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default QuickNavigation;
