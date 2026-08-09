// src/components/action/CreateAdminModal.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CreateAdminModal = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    status: "Active / Access Guraned",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          width: { xs: "90%", sm: "612px" },
          borderRadius: "16px",
          p: { xs: 2.5, sm: 3.5 },
          backgroundColor: "#F8FAFC",
          boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#0F172A",
          }}
        >
          Create New Admin Account
        </Typography>

        <IconButton onClick={onClose} size="small" sx={{ color: "#94A3B8" }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Form Content */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          alignItems: "center",
        }}
      >
        {/* Full Name Field */}
        <Box sx={{ width: "100%", maxWidth: "548px" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#64748B",
              mb: 0.75,
            }}
          >
            Full Name<span style={{ color: "#EF4444" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            value={formData.fullName}
            onChange={handleChange("fullName")}
            placeholder="e.g. Ahmad Hassan"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
                "& fieldset": { borderColor: "#E2E8F0" },
                "&:hover fieldset": { borderColor: "#CBD5E1" },
                "&.Mui-focused fieldset": { borderColor: "#014BA8" },
              },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                color: "#1E293B",
                "&::placeholder": { color: "#94A3B8", opacity: 1 },
              },
            }}
          />
        </Box>

        {/* Corporate Email Address Field */}
        <Box sx={{ width: "100%", maxWidth: "548px" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#64748B",
              mb: 0.75,
            }}
          >
            Corporate Email Address <span style={{ color: "#EF4444" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="username@tripooo.com"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
                "& fieldset": { borderColor: "#E2E8F0" },
                "&:hover fieldset": { borderColor: "#CBD5E1" },
                "&.Mui-focused fieldset": { borderColor: "#014BA8" },
              },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                color: "#1E293B",
                "&::placeholder": { color: "#94A3B8", opacity: 1 },
              },
            }}
          />
        </Box>

        {/* Account Status Field */}
        <Box sx={{ width: "100%", maxWidth: "548px" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#64748B",
              mb: 0.75,
            }}
          >
            Account Status <span style={{ color: "#EF4444" }}>*</span>
          </Typography>
          <Select
            fullWidth
            value={formData.status}
            onChange={handleChange("status")}
            sx={{
              height: "48px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#1E293B",
              fontWeight: 500,
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E2E8F0" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#CBD5E1" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#014BA8" },
            }}
          >
            <MenuItem value="Active / Access Guraned">Active / Access Guraned</MenuItem>
            <MenuItem value="Inactive / Suspended">Inactive / Suspended</MenuItem>
          </Select>
        </Box>

        {/* Buttons Action Group */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "548px",
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            gap: 1.5,
            mt: 1.5,
          }}
        >
          {/* Cancel Button */}
          <Button
            onClick={onClose}
            sx={{
              flex: 1,
              height: "48px",
              borderRadius: "8px",
              border: "1px solid #014BA8",
              color: "#014BA8",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F1F5F9",
              },
            }}
          >
            Cancel
          </Button>

          {/* Save Button (354px) */}
          <Button
            type="submit"
            sx={{
              width: { xs: "100%", sm: "354px" },
              height: "48px",
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
            Save Identity
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CreateAdminModal;