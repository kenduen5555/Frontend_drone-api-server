import React, { useEffect, useState } from "react";
import axios from "axios";

const LogList = () => {
  const [logs, setLogs] = useState([]);
  const droneId = process.env.REACT_APP_DRONE_ID;

  useEffect(() => {
    // เรียก API จาก server ของคุณ
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${droneId}`)
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
      });
  }, [droneId]);

  if (!logs.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Log Records</h1>
      <table>
        <thead>
          <tr>
            <th>Created</th>
            <th>Country</th>
            <th>Drone ID</th>
            <th>Drone Name</th>
            <th>Celsius</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.created}</td>
              <td>{log.country}</td>
              <td>{log.drone_id}</td>
              <td>{log.drone_name}</td>
              <td>{log.celsius}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogList;
