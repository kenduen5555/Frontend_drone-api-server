import { useState, useEffect } from "react";

const LogFormPage = () => {
  const [temp, setTemp] = useState("");
  const [config, setConfig] = useState(null);
  const [message, setMessage] = useState("");
  const droneId = import.meta.env.VITE_DRONE_ID;
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBase}/configs/${droneId}`)
      .then(res => res.json())
      .then(data => setConfig(data));
  }, [apiBase, droneId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!config) return;

    const payload = {
      drone_id: config.drone_id,
      drone_name: config.drone_name,
      country: config.country,
      celsius: parseFloat(temp),
    };

    const res = await fetch(`${apiBase}/logs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setMessage("✅ Log created successfully!");
      setTemp("");
    } else {
      setMessage("❌ Failed to create log.");
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Temperature Log Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Temperature (°C)"
          className="border p-2 rounded w-full"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default LogFormPage;
