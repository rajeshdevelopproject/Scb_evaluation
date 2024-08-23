import React, { useEffect, useState } from "react";
import TabHeader from "./TapHeader/TabHeader";
import useFetch from "../customHooks/useFetch";

const PendingApproval = () => {
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
      <TabHeader title="Payment - Pending Approval" icon={false} />
      {isLoading ? (
        <div>Page is loading</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default PendingApproval;
