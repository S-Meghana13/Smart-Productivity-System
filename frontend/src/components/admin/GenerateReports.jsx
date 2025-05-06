// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import jsPDF from 'jspdf';
// import { saveAs } from 'file-saver';
// import '../../styles/GenerateReports.css';

// const GenerateReports = () => {
//   const [users, setUsers] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });
//   const [selectedUser, setSelectedUser] = useState('');
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetching users and tasks for report generation
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/admin/users').then((res) => {
//       setUsers(res.data);  // Assuming response contains user data
//     });

//     axios.get('http://localhost:5000/api/admin/tasks').then((res) => {
//       setTasks(res.data);  // Assuming response contains tasks data
//     });
//   }, []);

//   const handleGenerateReport = () => {
//     if (!selectedUser || !dateRange.start || !dateRange.end) {
//       alert("Please select a user and date range");
//       return;
//     }

//     const filters = {
//       userId: selectedUser,
//       startDate: dateRange.start,
//       endDate: dateRange.end,
//     };

//     setLoading(true);
//     axios.post('http://localhost:5000/api/admin/generate-reports', filters)
//       .then((res) => {
//         setReportData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error generating report:", err);
//         setLoading(false);
//       });
//   };

//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text('User Performance Report', 20, 20);
//     doc.autoTable({ html: '#report-table' });
//     doc.save('performance_report.pdf');
//   };

//   const handleDownloadCSV = () => {
//     const rows = reportData.map((row) => [
//       row.userName,
//       row.category,
//       row.status,
//       row.totalHours,
//       row.taskCount,
//     ]);

//     const csvContent = 'data:text/csv;charset=utf-8,'
//       + ['UserName,Category,Status,Total Hours,Task Count'].join(',') + '\n'
//       + rows.map((row) => row.join(',')).join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'performance_report.csv');
//   };

//   const columns = React.useMemo(() => [
//     {
//       Header: 'User Name',
//       accessor: 'userName',
//     },
//     {
//       Header: 'Category',
//       accessor: 'category',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//     },
//     {
//       Header: 'Total Hours',
//       accessor: 'totalHours',
//     },
//     {
//       Header: 'Task Count',
//       accessor: 'taskCount',
//     },
//   ], []);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: reportData });

//   return (
//     <div className="container">
//       <h2 className="text-2xl font-bold mb-4">Generate Reports</h2>

//       <div className="filters">
//         <label>User</label>
//         <select
//           value={selectedUser}
//           onChange={(e) => setSelectedUser(e.target.value)}
//         >
//           <option value="">Select User</option>
//           {users.map((user) => (
//             <option key={user._id} value={user._id}>
//               {user.name}
//             </option>
//           ))}
//         </select>

//         <label>Date Range</label>
//         <input
//           type="date"
//           value={dateRange.start}
//           onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//         />
//         <input
//           type="date"
//           value={dateRange.end}
//           onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//         />

//         <button
//           onClick={handleGenerateReport}
//           className="bg-blue-500 text-white p-2 rounded"
//           disabled={loading}
//         >
//           {loading ? 'Generating Report...' : 'Generate Report'}
//         </button>
//       </div>

//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="report-table">
//           <table {...getTableProps()} id="report-table" className="min-w-full mt-6">
//             <thead>
//               {headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                   {headerGroup.headers.map(column => (
//                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//               {rows.map(row => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map(cell => {
//                       return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
//                     })}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           <button
//             onClick={handleDownloadPDF}
//             className="bg-green-600 text-white p-2 rounded mt-4"
//           >
//             Download as PDF
//           </button>

//           <button
//             onClick={handleDownloadCSV}
//             className="bg-green-600 text-white p-2 rounded mt-4 ml-4"
//           >
//             Download as CSV
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GenerateReports;


/*
// frontend/src/pages/GenerateReports.jsx
// src/pages/GenerateReports.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const GenerateReports = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/generate-report");
        setReportData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch report:", err);
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Detailed User Performance Report</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Username</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Total Hours</th>
                <th className="p-2 border">Task Count</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">{item.userName}</td>
                  <td className="p-2 border">{item.category}</td>
                  <td className="p-2 border">{item.status}</td>
                  <td className="p-2 border">{item.totalHours}</td>
                  <td className="p-2 border">{item.taskCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GenerateReports;
*/



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import jsPDF from 'jspdf'; // ✅

import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import '../../styles/GenerateReports.css';
import { Link } from "react-router-dom";

const GenerateReports = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedUser, setSelectedUser] = useState('');
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching users and tasks for report generation
  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/users').then((res) => {
      setUsers(res.data);  // Assuming response contains user data
    });

    axios.get('http://localhost:5000/api/admin/tasks').then((res) => {
      setTasks(res.data);  // Assuming response contains tasks data
    });
  }, []);

  const handleGenerateReport = () => {
    if (!selectedUser || !dateRange.start || !dateRange.end) {
      alert("Please select a user and date range");
      return;
    }

    const filters = {
      userId: selectedUser,
      startDate: dateRange.start,
      endDate: dateRange.end,
    };

    setLoading(true);
    axios.post('http://localhost:5000/api/admin/generate-reports', filters)
      .then((res) => {
        setReportData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error generating report:", err);
        setLoading(false);
      });
  };

  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF();
  //   doc.text('User Performance Report', 20, 20);
  //   doc.autoTable({ html: '#report-table' });
  //   doc.save('performance_report.pdf');
  // };

  const handleDownloadPDF = () => {
    if (reportData.length === 0) {
      alert("Please generate the report first.");
      return;
    }
  
    const doc = new jsPDF();
    doc.text("Task Report", 14, 10);
  
    const tableColumn = ["Task Title", "Status", "Date"];
    const tableRows = reportData.map(task => [
      task.title || "N/A",
      task.status || "N/A",
      new Date(task.date).toLocaleDateString() || "N/A"
    ]);
  
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
  
    doc.save("task_report.pdf");
  };
  

  const handleDownloadCSV = () => {
    const rows = reportData.map((row) => [
      row.userName,
      row.category,
      row.status,
      row.totalHours,
      row.taskCount,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,'
      + ['UserName,Category,Status,Total Hours,Task Count'].join(',') + '\n'
      + rows.map((row) => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'performance_report.csv');
  };

  const columns = React.useMemo(() => [
    {
      Header: 'User Name',
      accessor: 'userName',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Total Hours',
      accessor: 'totalHours',
    },
    {
      Header: 'Task Count',
      accessor: 'taskCount',
    },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: reportData });

  return (
    <div className="generate-report-container">
      <h2>Generate Reports</h2>
  
      <div className="filters">
        <label>
          Select User:
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">-- Select a User --</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.fullname}
              </option>
            ))}
          </select>
        </label>
  
        <label>
          Start Date:
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
        </label>
  
        <label>
          End Date:
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </label>
        <div className="style-button">
       <button onClick={handleGenerateReport}>Generate Report</button>
        </div>
      </div>
  
      {loading && <p>Loading report...</p>}
  
      {reportData.length > 0 && (
        <div className="report-table-container">
           <h3>Report Results</h3>
          <table className="report-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Total Hours</th>
                <th>Task Count</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  <td>{item.userName}</td>
                  <td>{item.category}</td>
                  <td>{item.status}</td>
                  <td>{item.totalHours}</td>
                  <td>{item.taskCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
              <div className='g-btn'>
          <button onClick={handleDownloadPDF} disabled={reportData.length === 0}>Download PDF</button>
          </div>
          <div className="m-btn">
<Link to="/admindashboard" className="dashboard-link">
  Go to Dashboard
</Link>
</div>

        </div>
      )}
    </div>
    
    
  );
  
};

export default GenerateReports;