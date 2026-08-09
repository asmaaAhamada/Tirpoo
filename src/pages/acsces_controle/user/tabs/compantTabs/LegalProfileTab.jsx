// src/components/tabs/companyTabs/LegalProfileTab.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const LegalProfileTab = () => {
  const details = [
    {
      label: "OFFICIAL BUSINESS NAME",
      value: "Arabian Trails for Tourism & Desert Safaris Ltd.",
    },
    {
      label: "COMMERCIAL REGISTER (CR)",
      value: "CR-2026-00412",
      isBold: true,
    },
    {
      label: "TAX REGISTRATION ID",
      value: "TAX-99812-DXB",
    },
    {
      label: "CORPORATE EMAIL CONTACT",
      value: "operations@arabiantrails.com",
    },
    {
      label: "HEADQUARTERS PHONE",
      value: "+971 4 555 9012",
    },
    {
      label: "REGISTERED ADDRESS",
      value: "Office 402, Al-Moosa Tower 2, Sheikh Zayed Road, Dubai, UAE",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2.5, sm: 4 },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#1E293B" }}>
        Corporate & Legal Identity
      </Typography>

      <Box sx={{ width: "100%", height: "1px", backgroundColor: "rgba(226, 232, 240, 1)", my: 3 }} />

      <Grid container spacing={3}>
        {details.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#64748B",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#1E293B",
                  fontWeight: item.isBold ? 700 : 500,
                  mt: "4px",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LegalProfileTab;