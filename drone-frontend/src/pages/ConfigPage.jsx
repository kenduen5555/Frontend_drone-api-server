import { useEffect, useState } from "react";

const ConfigPage = () => {
  const [config, setConfig] = useState(null);
  const droneId = import.meta.env.VITE_DRONE_ID;
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBase}/configs/${droneId}`)
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.error(err));
  }, [apiBase, droneId]);

  if (!config) return <p className="text-center mt-8">Loading config...</p>;

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Drone Config</h1>
      <ul className="space-y-2">
        <li><b>Drone ID:</b> {config.drone_id}</li>
        <li><b>Drone Name:</b> {config.drone_name}</li>
        <li><b>Light:</b> {config.light}</li>
        <li><b>Country:</b> {config.country}</li>
      </ul>
    </div>
  );
};

export default ConfigPage;
