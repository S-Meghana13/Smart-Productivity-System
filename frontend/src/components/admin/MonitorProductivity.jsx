// frontend: MonitorProductivity.jsx
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/MonitorProductivity.css";

const MonitorProductivity = () => {
  const [productivityData, setProductivityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductivityData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/productivity-summary");
        setProductivityData(response.data);
      } catch (error) {
        console.error("Error fetching productivity data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductivityData();
  }, []);

  return (
    <div className="monitor-productivity">
      <h1>Monitor Productivity Trends</h1>
      {loading ? (
        <p>Loading productivity data...</p>
      ) : productivityData.length === 0 ? (
        <p>No productivity data available.</p>
      ) : (
        <div className="productivity-reports">
          {productivityData.map((data, index) => (
            <div key={index} className="report-card">
              <p><strong>User ID:</strong> {data._id}</p>
              <p><strong>Avg. Productivity Score:</strong> {data.avgProductivityScore.toFixed(2)}%</p>
              <p><strong>Total Activities:</strong> {data.totalActivities}</p>
              <p><strong>Last Activity:</strong> {new Date(data.lastActivity).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonitorProductivity;*/
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/MonitorProductivity.css";

// const MonitorProductivity = () => {
//   const [productivityData, setProductivityData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProductivityData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/adminproductivity");
//         setProductivityData(response.data);
//       } catch (error) {
//         console.error("Error fetching productivity data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductivityData();
//   }, []);

//   return (
//     <div className="monitor-productivity">
//       <h1>Monitor Productivity Trends</h1>
//       {loading ? (
//         <p>Loading productivity data...</p>
//       ) : productivityData.length === 0 ? (
//         <p>No productivity data available.</p>
//       ) : (
//         <div className="productivity-reports">
//           {productivityData.map((data, index) => (
//             <div key={index} className="report-card">
//               <h3>{data.userName}</h3>
//               <p><strong>Productivity Score:</strong> {data.productivityScore}%</p>
//               <p><strong>Time Spent:</strong> {data.timeSpent} hours</p>
//               <p><strong>Tasks Completed:</strong> {data.tasksCompleted}</p>
//               <p><strong>Last Login:</strong> {new Date(data.lastLogin).toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MonitorProductivity;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/MonitorProductivity.css";
import { Link } from "react-router-dom";

const MonitorProductivity = () => {
  const [productivityData, setProductivityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductivityData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/productivity");
        setProductivityData(response.data);
      } catch (error) {
        console.error("Error fetching productivity data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductivityData();
  }, []);

  return (
    <div className="monitor-productivity">
      <h1>Monitor Productivity Trends</h1>
      {loading ? (
        <p>Loading productivity data...</p>
      ) : productivityData.length === 0 ? (
        <p>No productivity data available.</p>
      ) : (
        <div className="productivity-reports">
          {productivityData.map((data, index) => (
            <div key={index} className="report-card">
              <h3>{data.userName}</h3>
              <p><strong>Productivity Score:</strong> {data.productivityScore}</p>
              <p><strong>Total Hours Logged:</strong> {data.totalHours.toFixed(2)}</p>
              <p><strong>Tasks Completed:</strong> {data.tasksCompleted}</p>
            </div>
          ))}
        </div>
      )}
       <div className="m-btn">
      <Link to="/admindashboard" className="dashboard-link">
        Go to Dashboard
      </Link>
      </div>
    </div>
  );
};

export default MonitorProductivity;
