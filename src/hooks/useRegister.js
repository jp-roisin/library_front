import axios from "axios";
import { useState } from "react";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const useRegister = (data) => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState();
  const formatedData = JSON.parse(JSON.stringify(data));
  try {
    axios
      .post(`http://localhost:8000/api/register`, formatedData, { headers })
      .then((res) => {
        if (res.data.users) {
          setResponse(res);
        } else {
          throw new Error("Request failed!");
        }
      });
  } catch (err) {
    setError(err.message || "Something went wrong!");
  }
  return {error, response}
};
