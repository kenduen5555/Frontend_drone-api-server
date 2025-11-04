import React, { useState, useEffect } from 'react'
import ConfigView from './pages/ConfigView'
import LogForm from './pages/LogForm'
import LogsView from './pages/LogsView'

export default function App() {
  const [route, setRoute] = useState('config') // 'config' | 'form' | 'logs'
  const [config, setConfig] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Drone Dashboard</h1>
        <nav className="space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded" onClick={() => setRoute('config')}>View Config</button>
          <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded" onClick={() => setRoute('form')}>Temperature Log Form</button>
          <button className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded" onClick={() => setRoute('logs')}>View Logs</button>
        </nav>
      </header>

      <main className="flex-grow p-6">
        {route === 'config' && <ConfigView setConfig={setConfig} />}
        {route === 'form' && <LogForm config={config} />}
        {route === 'logs' && <LogsView config={config} />}
      </main>

      <footer className="bg-gray-800 p-2 text-center text-xs text-gray-400">
        Connected to API: {import.meta.env.VITE_API_BASE}
      </footer>
    </div>
  )
}
