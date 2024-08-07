import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/dashboard/DashboardLayout.css';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <div className={`d-flex ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="content p-4 w-100 dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
