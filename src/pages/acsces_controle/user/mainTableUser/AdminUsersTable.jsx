// src/components/AdminUsersTable.jsx
import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  IconButton,
  Pagination,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tag } from "antd";
import AdminUserDetails from "../AdminUserDetails";

const dummyAdminData = [
  {
    id: "TRP-2026-001",
    name: "Jane Cooper",
    email: "useremail@tripooo.com",
    initials: "JC",
    status: "Active",
  },
  {
    id: "TRP-2026-002",
    name: "Marvin McKinney",
    email: "useremail@tripooo.com",
    initials: "MM",
    status: "Active",
  },
];

const AdminUsersTable = () => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  // إذا تم اختيار أدمن، نعرض مكون التفاصيل بدلاً من الجدول
  if (selectedAdmin) {
    return (
      <AdminUserDetails
        admin={selectedAdmin}
        onBack={() => setSelectedAdmin(null)}
      />
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1120px",
        mx: "auto",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          {/* العناوين (Table Head) */}
          <TableHead sx={{ backgroundColor: "#F8FAFC" }}>
            <TableRow>
              <TableCell sx={{ color: "#64748B", fontWeight: 700, fontSize: "11px", letterSpacing: "0.5px" }}>
                ADMIN IDENTITY
              </TableCell>
              <TableCell sx={{ color: "#64748B", fontWeight: 700, fontSize: "11px", letterSpacing: "0.5px" }}>
                SYSTEM ID
              </TableCell>
              <TableCell sx={{ color: "#64748B", fontWeight: 700, fontSize: "11px", letterSpacing: "0.5px" }}>
                ACCOUNT STATUS
              </TableCell>
              <TableCell align="right" sx={{ color: "#64748B", fontWeight: 700, fontSize: "11px", letterSpacing: "0.5px" }}>
                QUICK ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>

          {/* محتوى الجدول (Table Body) */}
          <TableBody>
            {dummyAdminData.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => setSelectedAdmin(row)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#F8FAFC" },
                  "& td, & th": { borderColor: "#F1F5F9" },
                }}
              >
                {/* ADMIN IDENTITY */}
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: "#E0F2FE",
                        color: "#0284C7",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      {row.initials}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                        {row.name}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#64748B", mt: "2px" }}>
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                {/* SYSTEM ID */}
                <TableCell>
                  <Typography sx={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>
                    ID: {row.id}
                  </Typography>
                </TableCell>

                {/* ACCOUNT STATUS */}
                <TableCell>
                  <Tag
                    bordered={false}
                    style={{
                      backgroundColor: row.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                      color: row.status === "Active" ? "#16A34A" : "#DC2626",
                      fontWeight: 600,
                      fontSize: "12px",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {row.status}
                  </Tag>
                </TableCell>

                {/* QUICK ACTIONS */}
                <TableCell align="right">
                  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 0.5 }} onClick={(e) => e.stopPropagation()}>
                    <IconButton
                      size="small"
                      onClick={() => setSelectedAdmin(row)}
                      sx={{ color: "#64748B", "&:hover": { color: "#014BA8" } }}
                    >
                      <VisibilityOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: "#64748B", "&:hover": { color: "#334155" } }}
                    >
                      <BlockIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: "#EF4444", "&:hover": { backgroundColor: "rgba(239, 68, 68, 0.08)" } }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* الترقيم السفلي (Footer Pagination) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderTop: "1px solid #F1F5F9",
        }}
      >
        <Typography sx={{ fontSize: "13px", color: "#94A3B8" }}>
          Showing 1 to 2 of 5 entries
        </Typography>
        <Pagination count={3} shape="rounded" size="small" />
      </Box>
    </Box>
  );
};

export default AdminUsersTable;