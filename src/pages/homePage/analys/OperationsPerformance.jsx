// src/components/OperationsPerformance.jsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  VictoryChart,
  VictoryLine,
  VictoryArea,
  VictoryAxis,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import { colors } from "../../../style/colors";

const revenueData = [
  { x: "May 5", y: 130, date: "May 5" },
  { x: "May 6", y: 170, date: "May 6" },
  { x: "May 7", y: 276, date: "May 7" },
  { x: "May 8", y: 220, date: "May 8" },
  { x: "May 9", y: 280, date: "May 9" },
  { x: "May 10", y: 290, date: "May 10" },
  { x: "May 11", y: 320, date: "May 11" },
];

const bookingsData = [
  { x: "May 5", y: 90, date: "May 5" },
  { x: "May 6", y: 140, date: "May 6" },
  { x: "May 7", y: 190, date: "May 7" },
  { x: "May 8", y: 160, date: "May 8" },
  { x: "May 9", y: 240, date: "May 9" },
  { x: "May 10", y: 210, date: "May 10" },
  { x: "May 11", y: 260, date: "May 11" },
];

const OperationsPerformance = () => {
  const [activeTab, setActiveTab] = useState("revenue");
  const activeData = activeTab === "revenue" ? revenueData : bookingsData;

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "705px" },
        height: "326px",
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
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: colors.textPrimary,
              lineHeight: 1.2,
            }}
          >
            Operations Performance
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: colors.textSecondary,
              marginTop: "2px",
            }}
          >
            Monitored revenue and total bookings over time
          </Typography>
        </Box>

        {/* Toggle Buttons */}
        <Box
          sx={{
            width: "166px",
            height: "36px",
            backgroundColor: colors.toggleBg,
            borderRadius: "6px",
            padding: "3px",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Button
            disableRipple
            onClick={() => setActiveTab("revenue")}
            sx={{
              flex: 1,
              height: "100%",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: activeTab === "revenue" ? colors.whiteCardBg : "transparent",
              color: activeTab === "revenue" ? colors.textSecondary : colors.tabInactiveText,
              boxShadow: activeTab === "revenue" ? "0px 1px 3px rgba(0, 0, 0, 0.08)" : "none",
              "&:hover": {
                backgroundColor: activeTab === "revenue" ? colors.whiteCardBg : "transparent",
              },
            }}
          >
            Revenue
          </Button>

          <Button
            disableRipple
            onClick={() => setActiveTab("bookings")}
            sx={{
              flex: 1,
              height: "100%",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: activeTab === "bookings" ? colors.whiteCardBg : "transparent",
              color: activeTab === "bookings" ? colors.textSecondary : colors.tabInactiveText,
              boxShadow: activeTab === "bookings" ? "0px 1px 3px rgba(0, 0, 0, 0.08)" : "none",
              "&:hover": {
                backgroundColor: activeTab === "bookings" ? colors.whiteCardBg : "transparent",
              },
            }}
          >
            Bookings
          </Button>
        </Box>
      </Box>

      {/* Chart Box */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "565px",
          height: "189px",
          mx: "auto",
        }}
      >
        <VictoryChart
          width={565}
          height={189}
          padding={{ top: 20, bottom: 35, left: 45, right: 20 }}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `${datum.y}\n${datum.date}`}
              labelComponent={
                <VictoryTooltip
                flyoutWidth={58}
flyoutHeight={92}
                  cornerRadius={6}
                  flyoutStyle={{
                    fill: "rgba(115, 166, 228, 0.9)",
                    stroke: "transparent",
                    
                  }}
                  style={{
                    fill: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: 600,
                    textAnchor: "middle",
                  }}
                  pointerLength={6}
                />
              }
            />
          }
        >
          {/* المحور العمودي */}
          <VictoryAxis
            dependentAxis
            tickValues={[0, 100, 200, 300]}
            style={{
              axis: { stroke: "transparent" },
              grid: { stroke: colors.border, strokeDasharray: "4, 4" },
              tickLabels: {
                fill: colors.axisText,
                fontSize: 14,
                fontWeight: 500,
              },
            }}
          />

          {/* المحور الأفقي */}
          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              grid: { stroke: "transparent" },
              tickLabels: {
                fill: colors.axisText,
                fontSize: 12,
                fontWeight: 500,
              },
            }}
          />

<VictoryArea
  interpolation="natural"
  data={activeData}
  style={{
    data: {
      fill: "rgba(20, 150, 238, 0.04)",
      stroke: "transparent",
    },
  }}
  animate={{
    duration: 2000,
    onLoad: { duration: 2000 },
    easing: "quadInOut",
  }}
/>
          {/* رسم الخط بشكل تدريجي انسيابي */}
          <VictoryLine
            interpolation="natural"
            data={activeData}
            style={{
              data: {
                stroke: colors.lineChartBlue,
                strokeWidth: 3,
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 },
              easing: "quadInOut",
            }}
          />

          {/* تتابع ظهور النقاط فوق الخط عند الرسم */}
          <VictoryScatter
            data={activeData}
            size={4}
            style={{
              data: {
                fill: colors.lineChartBlue,
                stroke: "#FFFFFF",
                strokeWidth: 2,
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 },
              easing: "quadInOut",
            }}
          />
        </VictoryChart>
      </Box>
    </Box>
  );
};

export default OperationsPerformance;