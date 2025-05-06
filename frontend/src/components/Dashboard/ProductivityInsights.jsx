

/*
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { fetchAIInsights } from "../services/api";
// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ProductivityInsights = ({ token }) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Debugging log
    const token = localStorage.getItem("token");
    console.log("Token passed to component:", token);
    // Check if the token is available
    if (!token) {
      setError("Authentication token is missing.");
      setLoading(false);
      return;
    }

    // Fetch AI insights
    fetchAIInsights(token)
      .then((data) => {
        setInsights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching insights", err);
        setError("Failed to fetch insights. Please try again.");
        setLoading(false);
      });
  }, [token]);

  if (loading) return <p>Loading AI insights...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (!insights) return <p>No insights available at the moment.</p>;


   // Prepare data for Bar chart
   const barData = insights?.tasks?.length > 0 ? {
    labels: insights.tasks.map(task => task.date),
    datasets: [
      {
        label: 'Time Spent (minutes)',
        data: insights.tasks.map(task => task.timeSpent),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  } : null;
  
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">📊 AI Productivity Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Productivity Trends }
        <div className="p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-blue-700">🧠 Analyze Productivity Trends</h3>
          <p>{insights.trends || "No trend data available."}</p>
        </div>

        {/* Productivity Score }
        <div className="p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-green-700">📈 Productivity Score</h3>
          <p>{insights.score ? `${insights.score}/100` : "Not enough data to predict."}</p>
        </div>

        {/* Task Optimizations }
        <div className="p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-purple-700">💡 Suggested Task Optimizations</h3>
          {insights.suggestions?.length ? (
            <ul className="list-disc ml-6">
              {insights.suggestions.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          ) : (
            <p>No suggestions available.</p>
          )}
        </div>

        {/* AI Insights Summary }
        <div className="p-4 rounded-xl shadow border border-gray-200 mt-4">
  <h3 className="text-lg font-semibold text-yellow-700">📊 Time Spent on Tasks (Daily)</h3>
  {barData ? (
    <div className="w-full h-80">
      <Bar data={barData} options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Daily Time Spent on Tasks',
          },
        },
      }} />
    </div>
  ) : (
    <p>No data available for daily time spent.</p>
  )}
</div>
    </div>
  );
};

export default ProductivityInsights;

*/

// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
// } from "chart.js";
// import { fetchAIInsights } from "../services/api";

// // Register Chart.js components
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// const ProductivityInsights = ({ token }) => {
//   const [insights, setInsights] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log("Token passed to component:", token);
//     if (!token) {
//       setError("Authentication token is missing.");
//       setLoading(false);
//       return;
//     }

//     fetchAIInsights(token)
//       .then((data) => {
//         setInsights(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching insights", err);
//         setError("Failed to fetch insights. Please try again.");
//         setLoading(false);
//       });
//   }, [token]);

//   if (loading) return <p>Loading AI insights...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   if (!insights) return <p>No insights available at the moment.</p>;

//   // Prepare data for Bar chart
//   const barData = insights?.tasks?.length > 0
//     ? {
//         labels: insights.tasks.map((task) => task.date),
//         datasets: [
//           {
//             label: "Time Spent (minutes)",
//             data: insights.tasks.map((task) => task.timeSpent),
//             backgroundColor: "rgba(75, 192, 192, 0.5)",
//             borderColor: "rgba(75, 192, 192, 1)",
//             borderWidth: 1,
//           },
//         ],
//       }
//     : null;

//   return (
//     <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">📊 AI Productivity Insights</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Productivity Trends */}
//         <div className="p-4 rounded-xl shadow border border-gray-200">
//           <h3 className="text-lg font-semibold text-blue-700">🧠 Analyze Productivity Trends</h3>
//           <p>{insights.trends || "No trend data available."}</p>
//         </div>

//         {/* Productivity Score */}
//         <div className="p-4 rounded-xl shadow border border-gray-200">
//           <h3 className="text-lg font-semibold text-green-700">📈 Productivity Score</h3>
//           <p>{insights.score ? `${insights.score}/100` : "Not enough data to predict."}</p>
//         </div>

//         {/* Task Optimizations */}
//         <div className="p-4 rounded-xl shadow border border-gray-200">
//           <h3 className="text-lg font-semibold text-purple-700">💡 Suggested Task Optimizations</h3>
//           {insights.suggestions?.length ? (
//             <ul className="list-disc ml-6">
//               {insights.suggestions.map((tip, idx) => (
//                 <li key={idx}>{tip}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No suggestions available.</p>
//           )}
//         </div>

//         {/* AI Insights Summary*/}
//         <div className="p-4 rounded-xl shadow border border-gray-200 mt-4">
//   <h3 className="text-lg font-semibold text-yellow-700">📊 Time Spent on Tasks (Daily)</h3>
//   {barData ? (
//     <div className="w-full h-80">
//       <Bar
//         data={barData}
//         options={{
//           responsive: true,
//           plugins: {
//             title: {
//               display: true,
//               text: "Daily Time Spent on Tasks",
//             },
//           },
//         }}
//       />
//     </div>
//   ) : (
//     <p>No data available for daily time spent. Check the data structure.</p>
//   )}
// </div>
// </div>
//     </div>
//   );
// };

// export default ProductivityInsights;


import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { fetchAIInsights } from "../services/api";
import '../../styles/ProductivityInsights.css'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ProductivityInsights = ({ token }) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token passed to component:", token);
    if (!token) {
      setError("Authentication token is missing.");
      setLoading(false);
      return;
    }

    fetchAIInsights(token)
      .then((data) => {
        setInsights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching insights", err);
        setError("Failed to fetch insights. Please try again.");
        setLoading(false);
      });
  }, [token]);

  if (loading) return <p className="insights-loading">Loading AI insights...</p>;
  if (error) return <p className="insights-error">{error}</p>;

  if (!insights) return <p className="insights-empty">No insights available at the moment.</p>;

  // Prepare data for Bar chart
  const barData = insights?.tasks?.length > 0
    ? {
        labels: insights.tasks.map((task) => task.date),
        datasets: [
          {
            label: "Time Spent (minutes)",
            data: insights.tasks.map((task) => task.timeSpent),
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      }
    : null;

  return (
    <div className="insights-container">
      <h2 className="insights-title">📊 AI Productivity Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Productivity Trends */}
        <div className="p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-blue-700">🧠 Analyze Productivity Trends</h3>
          <p className="para-s">{insights.trends || "No trend data available."}</p>
        </div>

        {/* Productivity Score */}
        <div className="p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-green-700">📈 Productivity Score</h3>
          <p className="para-s">{insights.score ? `${insights.score}/100` : "Not enough data to predict."}</p>
        </div>

        {/* Task Optimizations */}
        <div className="p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-purple-700">💡 Suggested Task Optimizations</h3>
          {insights.suggestions?.length ? (
            <ul className="list-disc ml-6 para-s">
              {insights.suggestions.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          ) : (
            <p className="para-s">You are doing well.Keep trying to Learn</p>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default ProductivityInsights;
