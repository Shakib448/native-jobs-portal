import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY, HOST } from "@env";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": HOST,
    },
    params: {
      ...query,
    },
  };
};

export default useFetch;
