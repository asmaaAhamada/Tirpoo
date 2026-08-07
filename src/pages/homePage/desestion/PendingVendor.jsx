// src/components/PendingVendorApprovals.jsx
import React from "react";
import {
  Box,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Link,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { colors } from "../../../style/colors";

const mockVendors = [
  {
    id: 1,
    name: "Ahmad Al-Salem",
    category: "Local Certified Guide",
    submitted: "Today, 09:30 AM",
    credentials: "License_ID.pdf",
  },
  {
    id: 2,
    name: "Damascus Transport Co.",
    category: "Fleet Operator (50+ Buses)",
    submitted: "Today, 04:15 PM",
    credentials: "Fleet_Insurance.pdf",
  },
];

const PendingVendor = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "705px" },
        height: "251px",
        backgroundColor: colors.whiteCardBg,
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        padding: "14px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      {/* الهيدر العلوي */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",mb: 4
        //   marginBottom: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: colors.textSecondary,
          }}
        >
          Pending Vendor Approvals
        </Typography>

        <Chip
          label="Action Required"
          sx={{
            width: "115px",
            height: "22px",
            backgroundColor: colors.actionRequiredBg,
            color: colors.actionRequiredText,
            fontSize: "12px",
            fontWeight: 600,
            borderRadius: "4px",
            "& .MuiChip-label": {
              padding: 0,
            },
          }}
        />
      </Box>

      {/* الجدول مع التحكم بالشريط والتمرير بحسب نوع الجهاز */}
      <TableContainer
        sx={{
          maxHeight: "185px",
          // إخفاء السكرول تماماً للشاشات الكبيرة وإظهاره تلقائياً للموبايل والتابلت
          overflowX: { xs: "auto", lg: "hidden" },
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            height: { xs: "4px", lg: "0px" },
            display: { xs: "block", lg: "none" },
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.light_gray,
            borderRadius: "3px",
          },
        }}
      >
        <Table
          size="small"
          stickyHeader
          sx={{
            width: "100%",
            minWidth: { xs: "550px", lg: "100%" },
            tableLayout: "auto",
          }}
        >
          <TableHead>
            <TableRow>
              {[
                "VENDOR NAME",
                "CATEGORY",
                "SUBMITTED",
                "CREDENTIALS",
                "QUICK ACTIONS",
              ].map((column) => (
                <TableCell
                  key={column}
                  sx={{
                    backgroundColor: colors.cardBg,
                    color: colors.tableHeaderText,
                    fontSize: "10.5px",
                    fontWeight: 700,
                    borderBottom: "none",
                    padding: "6px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {mockVendors.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& td": {
                    borderBottom: `1px solid ${colors.border}`,
                    padding: "6px 8px",
                  },
                }}
              >
                {/* VENDOR NAME */}
                <TableCell
                  sx={{
                    fontSize: "11.5px",
                    fontWeight: 700,
                    color: colors.textPrimary,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.name}
                </TableCell>

                {/* CATEGORY */}
                <TableCell
                  sx={{
                    fontSize: "10.5px",
                    fontWeight: 400,
                    color: colors.textSecondary,
                    maxWidth: "120px",
                  }}
                >
                  {row.category}
                </TableCell>

                {/* SUBMITTED */}
                <TableCell
                  sx={{
                    fontSize: "10.5px",
                    fontWeight: 400,
                    color: colors.textSecondary,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.submitted}
                </TableCell>

                {/* CREDENTIALS */}
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <AttachFileIcon
                      sx={{
                        fontSize: "14px",
                        color: colors.linkBlue,
                        transform: "rotate(45deg)",
                      }}
                    />
                    <Link
                      underline="hover"
                      href="#"
                      sx={{
                        fontSize: "10.5px",
                        fontWeight: 500,
                        color: colors.linkBlue,
                      }}
                    >
                      {row.credentials}
                    </Link>
                  </Box>
                </TableCell>

                {/* QUICK ACTIONS */}
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  <Box sx={{ display: "flex", gap: "4px" }}>
                    <Button
                      disableRipple
                      sx={{
                        minWidth: "50px",
                        height: "22px",
                        padding: "1px 6px",
                        backgroundColor: colors.approveBg,
                        color: colors.approveText,
                        fontSize: "10.5px",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "4px",
                        "&:hover": {
                          backgroundColor: colors.approveBg,
                          opacity: 0.85,
                        },
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      disableRipple
                      sx={{
                        minWidth: "50px",
                        height: "22px",
                        padding: "1px 6px",
                        backgroundColor: colors.rejectBg,
                        color: colors.rejectText,
                        fontSize: "10.5px",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "4px",
                        "&:hover": {
                          backgroundColor: colors.rejectBg,
                          opacity: 0.85,
                        },
                      }}
                    >
                      Reject
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PendingVendor;