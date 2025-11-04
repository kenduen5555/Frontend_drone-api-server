import React, { useEffect, useState } from "react";
import axios from "axios";

const ConfigPage = () => {
  const [configData, setConfigData] = useState(null);
  const droneId = process.env.REACT_APP_DRONE_ID;

  useEffect(() => {
    // เรียก API จาก server ของคุณ
    axios
      .get(`${process.env.REACT_APP_API_URL}/configs/${droneId}`)
      .then((response) => {
        setConfigData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching config:", error);
      });
  }, [droneId]);

  if (!configData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Drone Config</h1>
      <p>Drone ID: {configData.drone_id}</p>
      <p>Drone Name: {configData.drone_name}</p>
      <p>Light: {configData.light}</p>
      <p>Country: {configData.country}</p>
    </div>
  );
};

export default ConfigPage;
