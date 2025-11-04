import { useEffect, useState } from "react";

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
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">View Logs</h1>

      <table className="w-full border-collapse border text-sm">
        <thead className="bg-blue-600 text-white">
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
              <tr key={i} className="text-center hover:bg-gray-50">
                <td className="border p-2">{log.created}</td>
                <td className="border p-2">{log.country}</td>
                <td className="border p-2">{log.drone_id}</td>
                <td className="border p-2">{log.drone_name}</td>
                <td className="border p-2">{log.celsius}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">No logs found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-3 py-1 rounded ${
            page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Prev
        </button>

        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-3 py-1 rounded ${
            page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LogsPage;
