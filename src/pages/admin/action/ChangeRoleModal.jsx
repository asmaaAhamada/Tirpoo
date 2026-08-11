// src/components/action/ChangeRoleModal.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ChangeRoleModal = ({ open, onClose, adminName }) => {
  const [selectedRole, setSelectedRole] = useState("Operations Manager");

  const roles = [
    {
      value: "Super Admin",
      label: "Super Admin",
      description: "Full system access, admin management, and financial payouts.",
      isCurrent: false,
    },
    {
      value: "Operations Manager",
      label: "Operations Manager",
      description: "Manage fleet, approve rentals, and view operational analytics.",
      isCurrent: true,
    },
    {
      value: "Support Agent",
      label: "Support Agent",
      description: "Read-only access to rentals, user support, and ticket resolution.",
      isCurrent: false,
    },
  ];

  const roleImpacts = [
    { text: "Approve Vehicle Rentals & Fleet Status", allowed: true },
    { text: "Manage Pricing & Discounts", allowed: true },
    { text: "Cannot create or suspend Admin Accounts", allowed: false },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          p: { xs: 2, sm: 3 },
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#0F172A",
              mb: 0.5,
            }}
          >
            Change Admin Role
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#64748B" }}>
            Select a new permission level for{" "}
            <Box component="span" sx={{ fontWeight: 600, color: "#0F172A" }}>
              {adminName || "Tala Betar"}
            </Box>
          </Typography>
        </Box>

        {/* Role Options */}
        <RadioGroup
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          sx={{ gap: 1.5, mb: 2.5 }}
        >
          {roles.map((role) => {
            const isSelected = selectedRole === role.value;
            return (
              <Box
                key={role.value}
                onClick={() => setSelectedRole(role.value)}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  p: 2,
                  borderRadius: "10px",
                  border: isSelected
                    ? "1.5px solid #014BA8"
                    : "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: isSelected ? "#014BA8" : "#CBD5E1",
                  },
                }}
              >
                <Radio
                  checked={isSelected}
                  value={role.value}
                  sx={{
                    p: 0,
                    mr: 1.5,
                    mt: 0.2,
                    color: "#94A3B8",
                    "&.Mui-checked": {
                      color: "#014BA8",
                    },
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#0F172A",
                      }}
                    >
                      {role.label}
                    </Typography>
                    {role.isCurrent && (
                      <Box
                        sx={{
                          backgroundColor: "#E0F2FE",
                          color: "#0369A1",
                          fontSize: "11px",
                          fontWeight: 600,
                          px: 1,
                          py: 0.2,
                          borderRadius: "4px",
                        }}
                      >
                        Current Now
                      </Box>
                    )}
                  </Box>
                  <Typography sx={{ fontSize: "12px", color: "#64748B", lineHeight: 1.4 }}>
                    {role.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </RadioGroup>

        {/* Role Impact Preview Box */}
        <Box
          sx={{
            backgroundColor: "#F8FAFC",
            borderRadius: "10px",
            p: 2,
            mb: 3,
            border: "1px solid #E2E8F0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <ShieldOutlinedIcon sx={{ color: "#475569", fontSize: "18px" }} />
            <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#334155" }}>
              Role Impact Preview
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {roleImpacts.map((item, idx) => (
              <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item.allowed ? (
                  <CheckIcon sx={{ color: "#475569", fontSize: "16px" }} />
                ) : (
                  <CloseIcon sx={{ color: "#475569", fontSize: "16px" }} />
                )}
                <Typography sx={{ fontSize: "12px", color: "#475569" }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            justifyContent: "space-between",
          }}
        >
          <Button
            fullWidth
            onClick={onClose}
            sx={{
              height: "44px",
              borderRadius: "8px",
              border: "1px solid #014BA8",
              color: "#014BA8",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#F0F7FF",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            fullWidth
            onClick={onClose}
            sx={{
              height: "44px",
              borderRadius: "8px",
              backgroundColor: "#014BA8",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#013B85",
                boxShadow: "none",
              },
            }}
          >
            Update Role
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeRoleModal;