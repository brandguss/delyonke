import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health/")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <h1 className="text-3xl font-bold text-emerald-400">DelYonke</h1>
        <p className="mt-1 text-neutral-400">React + Tailwind + Django API</p>

        <div className="mt-6 rounded-xl bg-neutral-950 p-4 text-sm border border-neutral-800">
          <pre className="text-emerald-300">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

