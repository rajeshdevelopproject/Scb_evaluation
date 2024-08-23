import React, { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [resData, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  let dataFetch = async (url) => {
    setLoading(true);
    let res = await axios.get(`http://localhost:5000/${url}`);
    let temp = await res.data;

    setData(temp);
    setTimeout(() => {
      setLoading(false);
    });
  };

  return { isLoading, resData, dataFetch };
};

export default useFetch;
