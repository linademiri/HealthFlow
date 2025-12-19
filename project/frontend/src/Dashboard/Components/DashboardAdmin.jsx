import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import MainPageStats from "./MainPageStats";
import EarningReports from "./EarningReports";

const DashboardAdmin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f6f7",
      }}
    >
      {/* Sidebar */}
      <Sidebar userType="admin" />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          padding: 4,
        }}
      >
        {/* Stats Section */}
        <Box sx={{ mb: 4 }}>
          <MainPageStats />
        </Box>

        {/* Reports Section */}
        <Box>
          <EarningReports />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardAdmin;
