import React, { useState } from "react";
import axios from "axios";

const LogForm = () => {
  const [temperature, setTemperature] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const logData = {
      drone_id: process.env.REACT_APP_DRONE_ID,
      drone_name: "Dot Dot", // คุณสามารถดึงข้อมูลนี้จาก config
      country: "India", // เอามาจาก config ด้วย
      celsius: temperature,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/logs`, logData, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      })
      .then((response) => {
        alert("Log added successfully");
      })
      .catch((error) => {
        console.error("Error adding log:", error);
      });
  };

  return (
    <div>
      <h1>Log Temperature</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Temperature in Celsius:
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogForm;
