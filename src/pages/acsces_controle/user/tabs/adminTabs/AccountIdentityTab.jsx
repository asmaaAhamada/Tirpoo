// src/components/tabs/adminTabs/AccountIdentityTab.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const AccountIdentityTab = ({ adminData }) => {
  const profileSpecs = [
    {
      label: "ACCOUNT OWNER NAME",
      value: adminData?.ownerName || "Arabian Trails for Tourism & Desert Safaris Ltd.",
    },
    {
      label: "STAFF REGISTERED ID",
      value: adminData?.staffId || "TRP-2026-001",
      isBold: true,
    },
    {
      label: "ACCOUNT PROVISIONING DATE",
      value: adminData?.provisioningDate || "January 14, 2026",
    },
    {
      label: "SYSTEM EMAIL CONTACT",
      value: adminData?.email || "operations@arabiantrails.com",
    },
    {
      label: "LAST ACTIVE SYSTEM TOKEN",
      value: adminData?.lastActiveToken || "July 19, 2026 - 22:50 (Just Now)",
    },
    {
      label: "REGISTERED DEVICE IP",
      value: adminData?.deviceIp || "192.168.1.42 (Netherlands)",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2.5, sm: 3.5 },
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 2.5,
          pb: 2,
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        Personal Profile Specs
      </Typography>

      {/* Grid Specs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          rowGap: 3,
          columnGap: 4,
        }}
      >
        {profileSpecs.map((spec, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#64748B",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {spec.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: spec.isBold ? 700 : 500,
                color: spec.isBold ? "#0F172A" : "#475569",
              }}
            >
              {spec.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AccountIdentityTab;