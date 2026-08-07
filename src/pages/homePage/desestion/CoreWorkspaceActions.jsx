// src/components/CoreWorkspaceActions.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SyncIcon from "@mui/icons-material/Sync";
import TuneIcon from "@mui/icons-material/Tune";
import { colors } from "../../../style/colors";

const actions = [
  { label: "Add Trip", icon: <AddCircleOutlineIcon sx={{ fontSize: 24 }} /> },
  { label: "Lock Account", icon: <LockOutlinedIcon sx={{ fontSize: 24 }} /> },
  { label: "Force Sync", icon: <SyncIcon sx={{ fontSize: 24 }} /> },
  { label: "Config Rules", icon: <TuneIcon sx={{ fontSize: 24 }} /> },
];

const CoreWorkspaceActions = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "391px" },
        height: "201px",
        backgroundColor: colors.whiteCardBg,
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: colors.textSecondary,
          textAlign: "left",
        }}
      >
        Core Workspace Actions
      </Typography>

      {/* Grid 2x2 للأزرار */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
          width: "100%",
        }}
      >
        {actions.map((action, index) => (
          <Button
            key={index}
            disableRipple
            startIcon={action.icon}
            sx={{
              width: "100%",
              maxWidth: "168px",
              height: "48px",
              borderRadius: "4px",
              border: `1px solid ${colors.buttonBorder}`,
              backgroundColor: colors.whiteCardBg,
              color: colors.buttonText,
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "none",
              justifyContent: "flex-start",
              paddingLeft: "14px",
              gap: "8px",
              boxSizing: "border-box",
              "&:hover": {
                backgroundColor: colors.cardBg,
                borderColor: colors.light_gray,
              },
            }}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CoreWorkspaceActions;