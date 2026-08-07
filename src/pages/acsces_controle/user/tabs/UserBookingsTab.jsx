// src/pages/accessControl/tabs/UserBookingsTab.jsx
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Tag } from "antd";

const UserBookingsTab = () => {
  // بيانات تجريبية مطابقة للتصميم
  const bookingsData = [
    {
      id: "1",
      tripCode: "TRP-TR-402",
      tourDescription: "Old Town Cultural Walk",
      providerName: "Rami Shaheen (Guide)",
      schedule: "Jan 15, 2026",
      status: "Completed",
    },
    {
      id: "2",
      tripCode: "TRP-TR-881",
      tourDescription: "Desert Safari & Camping Tour",
      providerName: "Arabian Nights Co. (Company)",
      schedule: "Feb 22, 2026",
      status: "Active / Upcoming",
    },
  ];

  // دالة لتنسيق دبابيس الحالة (Tag) بناءً على نوع الحالة
  const renderStatusTag = (status) => {
    if (status === "Completed") {
      return (
        <Tag
          style={{
            backgroundColor: "#DCFCE7",
            color: "#16A34A",
            border: "none",
            borderRadius: "4px",
            padding: "2px 8px",
            fontWeight: 600,
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          Completed
        </Tag>
      );
    }
    return (
      <Tag
        style={{
          backgroundColor: "#FEF3C7",
          color: "#D97706",
          border: "none",
          borderRadius: "4px",
          padding: "2px 8px",
          fontWeight: 600,
          fontSize: "12px",
          whiteSpace: "nowrap",
        }}
      >
        Active / Upcoming
      </Tag>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "956px",
        minHeight: "264px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2, sm: 3 },
        boxSizing: "border-box",
      }}
    >
      {/* العنوان */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          lineHeight: 1.2,
          mb: 3,
        }}
      >
        User Bookings History
      </Typography>

      {/* حاوية الجدول مع ميزة السكرول للشاشات الصغيرة */}
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          borderRadius: "8px",
        }}
      >
        <Table aria-label="user bookings table">
          <TableHead sx={{ backgroundColor: "#F8FAFC" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "#64748B",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E2E8F0",
                  py: 1.5,
                  px: 1.5,
                  whiteSpace: "nowrap",
                }}
              >
                TRIP CODE
              </TableCell>
              <TableCell
                sx={{
                  color: "#64748B",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E2E8F0",
                  py: 1.5,
                  px: 1.5,
                  whiteSpace: "nowrap",
                }}
              >
                TOUR DESCRIPTION
              </TableCell>
              <TableCell
                sx={{
                  color: "#64748B",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E2E8F0",
                  py: 1.5,
                  px: 1.5,
                  whiteSpace: "nowrap",
                }}
              >
                PROVIDER NAME
              </TableCell>
              <TableCell
                sx={{
                  color: "#64748B",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E2E8F0",
                  py: 1.5,
                  px: 1.5,
                  whiteSpace: "nowrap",
                }}
              >
                SCHEDULE
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#64748B",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E2E8F0",
                  py: 1.5,
                  px: 1.5,
                  whiteSpace: "nowrap",
                }}
              >
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingsData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#F9FAFB" },
                }}
              >
                <TableCell
                  sx={{
                    color: "#64748B",
                    fontSize: "12px",
                    fontWeight: 500,
                    py: 1.5,
                    px: 1.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.tripCode}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#334155",
                    fontSize: "12px",
                    fontWeight: 600,
                    py: 1.5,
                    px: 1.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.tourDescription}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#334155",
                    fontSize: "12px",
                    fontWeight: 600,
                    py: 1.5,
                    px: 1.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.providerName}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#64748B",
                    fontSize: "12px",
                    fontWeight: 500,
                    py: 1.5,
                    px: 1.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.schedule}
                </TableCell>
                <TableCell align="center" sx={{ py: 1.5, px: 1.5, whiteSpace: "nowrap" }}>
                  {renderStatusTag(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserBookingsTab;