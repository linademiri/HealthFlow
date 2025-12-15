import React, { memo } from 'react';
import Sidebar from './Sidebar';
import Widget from './Widget';
import MainPageStats from './MainPageStats';
import EarningReports from './EarningReports';

// Inline layout constants extracted for readability and easier future tweaks
const DASHBOARD_BACKGROUND_STYLE = { backgroundColor: '#f5f6f7' };
const MAIN_CONTENT_STYLE = { paddingTop: '45px' };
const EARNING_REPORTS_CONTAINER_STYLE = {
    display: 'block',
    marginTop: '300px',
    marginLeft: '-990px',
};

const Dashboard = () => (
    <div className="d-flex" style={DASHBOARD_BACKGROUND_STYLE}>
        <Sidebar userType="doctor" />

        <div style={MAIN_CONTENT_STYLE}>
            <MainPageStats />
        </div>

        <div style={EARNING_REPORTS_CONTAINER_STYLE}>
            <EarningReports />
            <br />
        </div>
    </div>
);

export default memo(Dashboard);
