import axios from "axios";
import React, { useEffect, useState } from "react";

const useCreateApi = (url) => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [err, setErro] = useState("");

  const submit = (items) => {
    axios({
      url: `${url}`,
      method: "POST",
      data: items ,
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
  };

  return { loading, data, err , submit};
};

export default useCreateApi;
