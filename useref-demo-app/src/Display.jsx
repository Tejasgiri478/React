import React, { useEffect, useState } from "react";
import axios from "axios";
const Display = () => {
  const Api_Url = "http://localhost:8080/hotelData";
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(Api_Url)
      .then((response) => {
        setData(response.data);
        console.log("Data fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [Api_Url]);
  return data ? (
    data.map((item, id) => (
      <div key={id} className="card">
        <h2>{item.fname}</h2>
        <p>email: {item.email}</p>
        <p>Room Type: {item.select}</p>
        <p>date: {item.date}</p>
        <p>Guests: {item.number}</p>
        <p>Request: {item.textarea}</p>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};

export default Display;
