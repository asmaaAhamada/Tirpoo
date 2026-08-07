// src/pages/accessControl/tabs/FinancialWalletTab.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const FinancialWalletTab = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "956px",
        minHeight: "264px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2.5, sm: 3 },
        boxSizing: "border-box",
      }}
    >
      {/* العنوان */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#000000",
          lineHeight: 1.2,
        }}
      >
        Liquid Wallet Infrastructure
      </Typography>

      {/* الوصف */}
      <Typography
        sx={{
          fontSize: "14px",
          color: "#64748B",
          mt: 0.5,
          mb: 2.5,
        }}
      >
        Secure overview of the user's available funds and financial ledger within Tripooo.
      </Typography>

      {/* خط فاصل br بعرض البوكس */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(226, 232, 240, 1)",
          mb: 3,
        }}
      />

      {/* بوكس الرصيد Manned Box */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "505px",
          minHeight: "115px",
          backgroundColor: "rgba(1, 75, 168, 0.05)",
          borderRadius: "12px",
          p: 2.5,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#64748B",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            AVAILABLE LIQUIDITY
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "48px" },
              fontWeight: 700,
              color: "rgba(1, 75, 168, 1)",
              lineHeight: 1.1,
              mt: 0.5,
            }}
          >
            $4,820.00
          </Typography>
        </Box>

        {/* أيقونة الدولار 48x48 */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "2px solid rgba(1, 75, 168, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(1, 75, 168, 1)",
            flexShrink: 0,
          }}
        >
          <AttachMoneyIcon sx={{ fontSize: 32 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default FinancialWalletTab;