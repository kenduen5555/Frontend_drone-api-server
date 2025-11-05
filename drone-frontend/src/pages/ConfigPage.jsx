import { useContext } from "react";
import { ConfigContext } from "../ConfigContext"; // path ต้องตรงกับตำแหน่งไฟล์
import Header from "./Header"; 
const ConfigPage = () => {
const { config } = useContext(ConfigContext);

  if (!config) return <p className="text-center mt-8">Loading config...</p>;

  return (
<div className="bg-white shadow-md p-6 rounded-lg w-full max-w-5xl mx-auto">
  <Header title="Page #1"  title1="View Config" />  
  <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Drone Config</h1>
  <ul className="space-y-3">
    <li className="flex justify-between border-b pb-2"><span className="font-semibold">Drone ID:</span> {config.drone_id}</li>
    <li className="flex justify-between border-b pb-2"><span className="font-semibold">Drone Name:</span> {config.drone_name}</li>
    <li className="flex justify-between border-b pb-2"><span className="font-semibold">Light:</span> {config.light}</li>
    <li className="flex justify-between pb-2"><span className="font-semibold">Country:</span> {config.country}</li>
  </ul>
</div>

  );
};

export default ConfigPage;
