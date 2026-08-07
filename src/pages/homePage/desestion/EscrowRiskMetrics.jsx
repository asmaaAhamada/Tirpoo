// src/components/EscrowRiskMetrics.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../../style/colors";

const metrics = [
  {
    label: "Refunds Settled",
    value: "$4,240",
    color: colors.error,
    delay: "0.1s",
  },
  {
    label: "In Escrow Hold",
    value: "$18,900",
    color: colors.success,
    delay: "0.25s",
  },
];

const EscrowRiskMetrics = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "391px" },
        height: "158px",
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
        Escrow & Risk Metrics
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "12px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {metrics.map((metric, index) => (
          <Box
            key={index}
            sx={{
              width: "167px",
              height: "69px",
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.buttonBorder}`,
              borderRadius: "6px",
              padding: "12px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              // انميشن ظهور خفيف وتطجة للأعلى
              animation: `bounceUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${metric.delay} forwards`,
              opacity: 0,
              "@keyframes bounceUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(18px) scale(0.96)",
                },
                "70%": {
                  transform: "translateY(-4px) scale(1.02)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0) scale(1)",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: colors.metricsLabel,
                lineHeight: 1.2,
              }}
            >
              {metric.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: metric.color,
                marginTop: "4px",
              }}
            >
              {metric.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EscrowRiskMetrics;