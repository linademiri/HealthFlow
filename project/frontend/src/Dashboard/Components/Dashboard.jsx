import React, { memo } from 'react';
import Sidebar from './Sidebar';
import MainPageStats from './MainPageStats';
import EarningReports from './EarningReports';

const DASHBOARD_STYLE = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f6f7',
};

const MAIN_CONTENT_STYLE = {
    flexGrow: 1,
    padding: '30px 30px 30px 30px', // top padding + general padding
    display: 'flex',
    flexDirection: 'column',
    gap: '30px', // spacing between MainPageStats and EarningReports
};

const Dashboard = () => (
    <div style={DASHBOARD_STYLE}>
        {/* Sidebar */}
        <Sidebar userType="doctor" />

        {/* Main content */}
        <div style={MAIN_CONTENT_STYLE}>
            <MainPageStats />

            {/* Earning Reports */}
            <EarningReports />
        </div>
    </div>
);

export default memo(Dashboard);
