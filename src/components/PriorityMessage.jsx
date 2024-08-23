import React, { useEffect, useState } from "react";
import TabHeader from "./TapHeader/TabHeader";
import useFetch from "../customHooks/useFetch";

const PriorityMessage = () => {
  const { resData, isLoading, dataFetch } = useFetch();
  const [data, setData] = useState([]);
  useEffect(() => {
    dataFetch("pending_approval");
  }, []);

  useEffect(() => {
    setData(resData);
  }, [resData]);
  return (
    <div>
      <div>
        <TabHeader title="Priority Message" icon={false} />
        {isLoading ? (
          <div>Page is loding</div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default PriorityMessage;
