// src/components/DashboardLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-10 w-full min-h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">USER DASHBOARD</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
