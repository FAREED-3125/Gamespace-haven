import React, { useEffect, useState } from "react";
import axios from "axios";

export const apiKey = "key=d7d8a3fefe3a479fb8f8292c1c9824da";
const useFetch = (uri: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<any>([]);

  const options = {
    method: "GET",
    url: uri,
    headers: {
      "X-RapidAPI-Key": "5a3392f3camshdffd879b1cf16a4p1aea56jsn50454ed90f41",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };
  const fetchFunction = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunction();
  }, [uri]);
  return {
    data,
    err,
    loading,
  };
};

export default useFetch;
