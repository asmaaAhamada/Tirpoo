import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import WorningSvg from "../../../assets/icon_SVG/ph_seal-warning.svg";
import iconSvg from "../../../assets/icon_SVG/fluent_style-guide-24-regular.svg";
import icon_Svg from "../../../assets/icon_SVG/mynaui_building-one.svg";
import icon_pepole_Svg from "../../../assets/icon_SVG/ph_users-three-light.svg";

import { colors } from "../../../style/colors";

const BLUE_BTN_BG = "rgba(1, 75, 168, 0.1)";

const AMBER_BTN_BG = "rgba(254, 243, 199, 1)";

const defaultStateUserData = [
  {
    id: 1,
    title: "Total Travelers",
    value: "24,500",
    icon: (
      <img 
        src={icon_pepole_Svg} 
        alt="Travelers Icon" 
        style={{ width: "24px", height: "24px" }} 
      />
    ),
    iconBg: BLUE_BTN_BG,
  },
  {
    id: 2,
    title: "Active Guides",
    value: "1,240",
    icon: (
      <img 
        src={iconSvg} 
        alt="Guides Icon" 
        style={{ width: "24px", height: "24px" }} 
      />
    ),
    iconBg: BLUE_BTN_BG,
  },
  {
    id: 3,
    title: "Verified Companies",
    value: "350",
    icon: (
      <img 
        src={icon_Svg} 
        alt="Companies Icon" 
        style={{ width: "24px", height: "24px" }} 
      />
    ),
    iconBg: BLUE_BTN_BG,
  },
  {
    id: 4,
    title: "Approvals Required",
    value: "12",
    icon: (
      <img 
        src={WorningSvg} 
        alt="Approvals Required Icon" 
        style={{ 
          width: "24px", 
          height: "24px",
          filter: "invert(64%) sepia(85%) saturate(1450%) hue-rotate(4deg) brightness(101%) contrast(93%)"
        }} 
      />
    ),
    iconBg: AMBER_BTN_BG,
  }
];

const StateUserCard = ({ statsData = defaultStateUserData }) => {
  return (
    <Box
      sx={{
        width: "100%", // تم تعديل العرض لملء المساحة بالكامل بدون maxWidth أو mx: auto
        my: 2,
      }}
    >
      <Grid container spacing={2}>
        {statsData.map((item) => (
          <Grid item xs={12} sm={6} lg={3} key={item.id}>
            <Box
              sx={{
                backgroundColor: colors.whiteCardBg || "#FFFFFF",
                width: "100%",
                height: "100px",
                borderRadius: "8px",
                border: `1px solid ${colors.border || "rgba(226, 232, 240, 1)"}`,
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              {/* النصوص */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  minWidth: 0,
                  pr: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: colors.textSecondary || "rgba(100, 116, 139, 1)",
                    textAlign: "left",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: colors.textPrimary || "rgba(15, 23, 42, 1)",
                    lineHeight: 1.1,
                    textAlign: "left",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>

              {/* الأيقونة والخلفية الدائرية */}
              <Box
                sx={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: item.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StateUserCard;