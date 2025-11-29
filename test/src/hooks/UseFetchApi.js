import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [err, setErro] = useState("");
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const token= localStorage.getItem("token");
  useEffect(() => {
    axios({
      url: `${url}`,
      method: "GET",
      data: {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setErro(err);
      });
  }, [url]);

  return { loading, data, err };
};

export default useFetchApi;
