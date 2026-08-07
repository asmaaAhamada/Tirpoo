// src/components/PendingApprovalsSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../../style/colors";
import PendingVendor from "./PendingVendor";
import RightActionsContainer from "./RightActionsContainer";

const ApprovalsSection = () => {
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
      {/* البوكس اليساري (Pending Vendor Approvals) */}
      <PendingVendor />

    <RightActionsContainer />
    </Box>
  );
};

export default ApprovalsSection;