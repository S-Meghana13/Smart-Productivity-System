import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchProcrastinationInsights } from "../services/api";

const ProcrastinationChart = () => {
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    fetchProcrastinationInsights().then((data) => setInsights(data));
  }, []);

  if (!insights) return <p>Loading insights...</p>;

  const data = {
    labels: insights.dates,
    datasets: [
      {
        label: "Hours Delayed",
        data: insights.delays,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="p-4 mt-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold text-red-700">
        ⏳ Procrastination Alerts
      </h3>
      <p className="text-sm mb-2">{insights.alerts}</p>
      <Bar data={data} />
    </div>
  );
};

export default ProcrastinationChart;
