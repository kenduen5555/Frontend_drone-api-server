import { createContext, useState, useEffect } from "react";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(null);
  const droneId = import.meta.env.VITE_DRONE_ID;
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch(`${apiBase}/configs/${droneId}`);
        const data = await res.json();
        setConfig(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchConfig();
  }, [apiBase, droneId]);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
