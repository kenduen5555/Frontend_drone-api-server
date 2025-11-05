import { useEffect, useState } from "react";
import Header from "./Header"; 
const LogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const droneId = import.meta.env.VITE_DRONE_ID;
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch(`${apiBase}/logs/${droneId}?limit=12&page=${page}`);
        const data = await res.json();
        console.log("✅ Logs from API:", data);
        setLogs(Array.isArray(data.logs) ? data.logs : []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLogs();
  }, [apiBase, droneId, page]);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

  return (
<div className="bg-white shadow-md p-6 rounded-lg w-full max-w-5xl mx-auto">
  <Header title="Page #3" title1="View Logs" />
  <div className="overflow-x-auto">
    <table className="w-full max-w-full border border-gray-300 text-sm">
      <thead className="bg-purple-600 text-white uppercase text-xs">
        <tr>
          <th className="border p-2">Created</th>
          <th className="border p-2">Country</th>
          <th className="border p-2">Drone ID</th>
          <th className="border p-2">Drone Name</th>
          <th className="border p-2">Celsius</th>
        </tr>
      </thead>
      <tbody>
        {logs.length > 0 ? (
          logs.map((log, i) => (
            <tr key={i} className="text-center hover:bg-gray-50 transition-colors duration-200">
              <td className="border p-2">{new Date(log.created).toLocaleString()}</td>
              <td className="border p-2">{log.country}</td>
              <td className="border p-2">{log.drone_id}</td>
              <td className="border p-2">{log.drone_name}</td>
              <td className="border p-2">{log.celsius}°C</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="border p-4 text-center text-gray-400">
              No logs found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-6">
    <button
      onClick={handlePrev}
      disabled={page === 1}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"
      }`}
    >
      Prev
    </button>

    <span className="text-sm text-gray-600 font-medium">
      Page {page} of {totalPages}
    </span>

    <button
      onClick={handleNext}
      disabled={page === totalPages}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"
      }`}
    >
      Next
    </button>
  </div>
</div>

  );
};

export default LogsPage;
