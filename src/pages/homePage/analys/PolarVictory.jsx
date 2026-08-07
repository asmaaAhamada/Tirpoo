// src/components/PolarVictory.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import { VictoryPie } from "victory";
import { colors } from "../../../style/colors";

const chartData = [
  {
    x: "Historical",
    y: 220,
    color: colors.historical,
    radius: 84,
  },
  {
    x: "City Walks",
    y: 350,
    color: colors.cityWalks,
    radius: 72,
  },
  {
    x: "Eco-Tours",
    y: 280,
    color: colors.ecoTours,
    radius: 72,
  },
  {
    x: "Flights Only",
    y: 404,
    color: colors.flightsOnly,
    radius: 72,
  },
];

const totalTrips = "1,254";

const legendItems = [
  { label: "Flights Only", color: colors.flightsOnly },
  { label: "City Walks", color: colors.cityWalks },
  { label: "Eco-Tours", color: colors.ecoTours },
  { label: "Historical", color: colors.historical },
];

const PolarVictory = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "399px" },
        height: "326px",
        backgroundColor: colors.whiteCardBg,
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* ========================= */}
      {/* العناوين */}
      {/* ========================= */}

      <Box sx={{ textAlign: "left" }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: colors.textPrimary,
            lineHeight: 1.2,
          }}
        >
          Trip Distribution
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: colors.textSecondary,
            marginTop: "2px",
          }}
        >
          Most demanded trip categories
        </Typography>
      </Box>

      {/* ========================= */}
      {/* المخطط */}
      {/* ========================= */}

      <Box
        sx={{
          position: "relative",

          width: "235px",
          height: "190px",

          mx: "auto",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ========================= */}
        {/* Pie Chart */}
        {/* ========================= */}

        <Box
          sx={{
            position: "relative",

            width: "200px",
            height: "200px",

            animation:
              "spinWheel 1s cubic-bezier(0.25, 1, 0.5, 1) forwards",

            "@keyframes spinWheel": {
              "0%": {
                transform: "rotate(-180deg) scale(0.6)",
                opacity: 0,
              },

              "100%": {
                transform: "rotate(0deg) scale(1)",
                opacity: 1,
              },
            },
          }}
        >
          <VictoryPie
            data={chartData}

            width={200}
            height={200}

            /*
             * حجم الفراغ الداخلي
             */
            innerRadius={40}

           
            padAngle={0}

            /*
             * دوران المخطط
             */
            startAngle={-70}

            /*
             * Historical أكبر من البقية
             */
            radius={({ datum }) => datum.radius}

            /*
             * الألوان
             */
            colorScale={chartData.map((item) => item.color)}

            /*
             * إخفاء Labels
             */
            labels={() => null}

            
            padding={8}

          
            style={{
              data: {
                stroke: ({ datum }) =>
                  datum.x === "Historical"
                    ? colors.whiteCardBg
                    : "transparent",

                strokeWidth: ({ datum }) =>
                  datum.x === "Historical" ? 5 : 0,

                strokeLinejoin: "round",
              },
            }}
          />
        </Box>

      

        <Box
          sx={{
            position: "absolute",

            top: "50%",
            left: "50%",

            transform: "translate(-50%, -50%)",

            textAlign: "center",

            pointerEvents: "none",

            zIndex: 10,
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,

              color: colors.textPrimary,

              lineHeight: 1,
            }}
          >
            {totalTrips}
          </Typography>

          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 600,

              color: colors.light_gray,

              marginTop: "4px",

              letterSpacing: "0.5px",
            }}
          >
            TOTAL TRIPS
          </Typography>
        </Box>
      </Box>

      {/* ========================= */}
      {/* Legend */}
      {/* ========================= */}

      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",
          alignItems: "center",

          width: "100%",

          flexWrap: "wrap",

          gap: "8px",
        }}
      >
        {legendItems.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",

              alignItems: "center",

              gap: "6px",
            }}
          >
            {/* لون العنصر */}

            <Box
              sx={{
                width: "8px",
                height: "8px",

                borderRadius: "50%",

                backgroundColor: item.color,
              }}
            />

            {/* اسم العنصر */}

            <Typography
              sx={{
                fontSize: "12px",

                fontWeight: 500,

                color: colors.textSecondary,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PolarVictory;