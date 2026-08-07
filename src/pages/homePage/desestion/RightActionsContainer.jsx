// src/components/RightActionsContainer.jsx
import React from "react";
import { Box } from "@mui/material";
import CoreWorkspaceActions from "./CoreWorkspaceActions";
import EscrowRiskMetrics from "./EscrowRiskMetrics";

const RightActionsContainer = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "392px"  },
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <CoreWorkspaceActions />
      <EscrowRiskMetrics />
    </Box>
  );
};

export default RightActionsContainer;