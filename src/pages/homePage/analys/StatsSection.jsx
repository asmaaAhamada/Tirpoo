import React from "react";

import { Box, Typography, Grid } from "@mui/material";



// الأيقونات من Material-UI Icons

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";



import { colors } from "../../../style/colors";

 import vendorsSvg from "../../../assets/icon_SVG/ph_users-three-light.svg";

  import   WorningSvg from "../../../assets/icon_SVG/ph_seal-warning.svg";

 import HugeiconSvg from "../../../assets/icon_SVG/hugeicons_travel-bag.svg";



// البيانات الوهمية (Fake Data)

const statsData = [

  {

    id: 1,

    title: "Total Revenue",

    value: "$142,380",

    changeText: "+12.4% vs last week",

    changeColor: colors.success,

    icon: <AttachMoneyIcon sx={{ color: colors.revenueIconColor, fontSize: 24 }} />,

    iconBg: colors.revenueIconBg,

  },

  {

    id: 2,

    title: "Completed Bookings",

    value: "1,240",

    changeText: "+8.3% vs last week",

    changeColor: colors.success,

icon: (

    <img

      src={HugeiconSvg}

      alt="Active Vendors Icon"

      style={{ width: "24px", height: "24px" }}

    />),    iconBg: colors.successIconBg,

  },

  {

    id: 3,

    title: "Active Vendors",

    value: "1,120",

    changeText: "+2.1% vs last week",

    changeColor: colors.primary,

icon: (

    <img

      src={vendorsSvg}

      alt="Active Vendors Icon"

      style={{ width: "24px", height: "24px" }}

    />

    ),    iconBg: colors.primaryIconBg,

  },

  {

    id: 4,

    title: "Open Disputes",

    value: "3",

    changeText: "-24% from yesterday",

    changeColor: colors.error,

icon: (

    <img

      src={WorningSvg}

      alt="Active Vendors Icon"

      style={{ width: "24px", height: "24px" }}

    />),      iconBg: colors.errorIconBg,

  },

];



const StatsSection = () => {

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

                backgroundColor: colors.whiteCardBg,

                width: { xs: "100%", lg: "259px" },

                height: "120px",

                borderRadius: "8px",

                border: `1px solid ${colors.border}`,

                padding: "16px",

                display: "flex",

                justifyContent: "space-between",

                alignItems: "flex-start",

                boxSizing: "border-box",

              }}

            >

              {/* الجهة اليسرى: العنوان، الرقم، الجملة التعبيرية */}

              <Box

                sx={{

                  display: "flex",

                  flexDirection: "column",

                  justifyContent: "space-between",

                  height: "100%",

                }}

              >

                <Typography

                  variant="body2"

                  sx={{

                    fontSize: "14px",

                    fontWeight: 500,

                    color: colors.textSecondary,

                    textAlign: "left",

                  }}

                >

                  {item.title}

                </Typography>



                <Typography

                  variant="h5"

                  sx={{

                    fontSize: "28px",

                    fontWeight: 700,

                    color: colors.textPrimary,

                    lineHeight: 1.1,

                    textAlign: "left",

                  }}

                >

                  {item.value}

                </Typography>



                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>

                  <Typography

                    variant="caption"

                    sx={{

                      fontSize: "12px",

                      fontWeight: 600,

                      color: item.changeColor,

                    }}

                  >

                    {item.changeText}

                  </Typography>

                  <TrendingUpIcon

                    sx={{

                      fontSize: 16,

                      color: item.changeColor,

                    }}

                  />

                </Box>

              </Box>



              {/* الجهة اليمنى: الزر الدائري الحاوي للأيقونة (44x44) */}

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

export default StatsSection;