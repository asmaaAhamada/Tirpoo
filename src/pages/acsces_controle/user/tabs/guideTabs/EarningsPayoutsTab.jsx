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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import moneyIcon from "../../../../../assets/icon_SVG/nimbus_money.svg";

import { Tag } from "antd";

// بيانات تجريبية مطابقة للصورة للجدول
const samplePayouts = [
  {
    id: 1,
    requestRef: "#PAY-3902",
    bankTarget: "Chase Bank (Acc ending in 9901)",
    amount: "$1,200.00",
    status: "Transferred / Paid",
  },
];

const EarningsPayoutsTab = ({ payoutData = samplePayouts }) => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
      }}
    >
      {/* 1. العنوان الرئيسي */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 0.5,
        }}
      >
        Financial Yield Ledger
      </Typography>

      {/* 2. الوصف الفرعي */}
      <Typography
        sx={{
          fontSize: "14px",
          color: "#64748B",
          mb: 3,
        }}
      >
        Review cumulative balance logs and pending payout requests for this provider.
      </Typography>

      {/* 3. البوكسين الإحصائيين */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
          mb: 4,
        }}
      >
        {/* البوكس اليساري: TOTAL NET EARNINGS */}
        <Box
          sx={{
            width: { xs: "100%", md: "346px" },
            height: "115px",
            backgroundColor: "rgba(1, 75, 168, 0.1)",
            borderRadius: "4px",
            p: 2.5,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#014BA8",
                letterSpacing: "0.02em",
              }}
            >
              TOTAL NET EARNINGS
            </Typography>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 700,
                color: "#014BA8",
                lineHeight: 1.1,
              }}
            >
              $4,820.00
            </Typography>
          </Box>
              <img src={moneyIcon} alt="Trash" width={48} height={48} />

        </Box>

        {/* البوكس اليميني: TRIPOOO COMESSION COLLECTED (10%) */}
        <Box
          sx={{
            width: { xs: "100%", md: "346px" },
            height: "115px",
            backgroundColor: "rgba(1, 75, 168, 0.05)",
            borderRadius: "4px",
            p: 2.5,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(148, 163, 184, 1)",
                letterSpacing: "0.02em",
              }}
            >
              TRIPOOO COMESSION COLLECTED (10%)
            </Typography>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 700,
                color: "#014BA8",
                lineHeight: 1.1,
              }}
            >
              $4,820.00
            </Typography>
          </Box>
              <img src={moneyIcon} alt="Trash" width={48} height={48} />
        </Box>
      </Box>

      {/* 4. عنوان قسم الجدول */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 2,
        }}
      >
        Bank Payout Requests
      </Typography>

      {/* 5. الجدول المتجاوب */}
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
                REQUEST REF
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
                BANK TARGET
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
                AMOUNT
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
            {payoutData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#F8FAFC" },
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#0F172A",
                    py: 2,
                  }}
                >
                  {row.requestRef}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#334155",
                    py: 2,
                  }}
                >
                  {row.bankTarget}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#0F172A",
                    py: 2,
                  }}
                >
                  {row.amount}
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
                    {row.status}
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

export default EarningsPayoutsTab;