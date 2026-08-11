// src/components/StateUserCard.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// الأيقونات من Material-UI Icons
import PeopleIcon from "@mui/icons-material/People";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import BusinessIcon from "@mui/icons-material/Business";
  import   WorningSvg from "../../assets/icon_SVG/ph_seal-warning.svg";

import iconSvg from "../../assets/icon_SVG/fluent_style-guide-24-regular.svg";
import icon_Svg from "../../assets/icon_SVG/mynaui_building-one.svg";
import icon_pepole_Svg from "../../assets/icon_SVG/ph_users-three-light.svg";
import { colors } from "../../style/colors";



// ألوان الكاردات الثلاثة الأولى
const BLUE_BTN_BG = "rgba(1, 75, 168, 0.1)";
const BLUE_ICON_COLOR = "rgba(1, 75, 168, 1)";

// ألوان الكارد الرابع (Approvals Required)
const AMBER_BTN_BG = "rgba(254, 226, 226, 1)";

// بيانات الكاردات الاربعة
const defaultStateUserData = [
  {
    id: 1,
    title: "Total Total Admin Users",
    value: "24,500",
icon: (
      <img 
        src={icon_pepole_Svg} 
        alt="Completed Bookings Icon" 
        style={{ width: "24px", height: "24px" }} 
      />
    ),      iconBg: BLUE_BTN_BG,
  },
  {
    id: 2,
    title: "Active Now",
    value: "1,240",
icon: (
      <img 
        src={iconSvg} 
        alt="Completed Bookings Icon" 
        style={{ width: "24px", height: "24px" }} 
      />
    ),      iconBg: BLUE_BTN_BG,
  },
  {
    id: 3,
    title: "Reset Pending",
    value: "350",
 icon: (
      <img 
        src={icon_Svg} 
        alt="Completed Bookings Icon" 
        style={{ width: "24px", height: "24px" }} 
      />
    ),    iconBg: BLUE_BTN_BG,
  },
 {
  id: 4,
  title: "Suspended",
  value: "12",
  icon: (
    <img 
      src={WorningSvg} 
      alt="Approvals Required Icon" 
      style={{ 
        width: "24px", 
        height: "24px",
        // هذا الفلتر يحول لون الـ SVG إلى درجة الأصفر/البرتقالي (Amber)
      }} 
    />
  ),
  iconBg: AMBER_BTN_BG,
}
];

const StateAdminCard = ({ statsData = defaultStateUserData }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1120px",
        mx: "auto",
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

export default StateAdminCard;