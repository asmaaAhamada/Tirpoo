// src/components/AnalyticsSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../../style/colors";
import PolarVictory from "./PolarVictory";
import OperationsPerformance from "./OperationsPerformance";

const AnalyticsSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1120px",
        mx: "auto",
        my: 3,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: "16px",
        alignItems: "stretch",
      }}
    >
   
       <OperationsPerformance />
      

      <PolarVictory />
    </Box>
  );
};

export default AnalyticsSection;