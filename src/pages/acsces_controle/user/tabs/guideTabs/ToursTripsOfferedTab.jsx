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
  Paper,
} from "@mui/material";
import { Tag } from "antd";

// بيانات تجريبية مطابقة للصورة
const sampleTours = [
  {
    id: 1,
    title: "Old Town Cultural Walk",
    price: "$45.00 / person",
    bookings: "142 Times",
    status: "Published & Active",
  },
  {
    id: 2,
    title: "Mountain Hiking & Sunset Tea",
    price: "$75.00 / person",
    bookings: "38 Times",
    status: "Published & Active",
  },
];

const ToursTripsOfferedTab = ({ toursData = sampleTours }) => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
      }}
    >
      {/* 1. العنوان الرئيسي بحجم 24px */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 0.5,
        }}
      >
        Active Tour Listings
      </Typography>

      {/* 2. الوصف الفرعي بحجم 14px */}
      <Typography
        sx={{
          fontSize: "14px",
          color: "#64748B",
          mb: 3,
        }}
      >
        Tours published by this guide available for booking on the Tripooo consumer marketplace.
      </Typography>

      {/* 3. الجدول المتجاوب */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: "none",
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F8FAFC" }}>
              <TableCell
                sx={{
                  color: "#475569",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  py: 1.5,
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                TOUR TITLE
              </TableCell>
              <TableCell
                sx={{
                  color: "#475569",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  py: 1.5,
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                BASE PRICE
              </TableCell>
              <TableCell
                sx={{
                  color: "#475569",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  py: 1.5,
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                TOTAL BOOKINGS
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#475569",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  py: 1.5,
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toursData.map((tour) => (
              <TableRow
                key={tour.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#F8FAFC" },
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#0F172A",
                    py: 2,
                  }}
                >
                  {tour.title}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#0F172A",
                    py: 2,
                  }}
                >
                  {tour.price}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#64748B",
                    py: 2,
                  }}
                >
                  {tour.bookings}
                </TableCell>
                <TableCell align="right" sx={{ py: 2 }}>
                  <Tag
                    style={{
                      backgroundColor: "#DCFCE7",
                      color: "#16A34A",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 12px",
                      fontWeight: 600,
                      fontSize: "12px",
                      marginRight: 0,
                    }}
                  >
                    {tour.status}
                  </Tag>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ToursTripsOfferedTab;