import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CreateAdminModal from "./CreateAdminModal";

const TableFiltersBar = ({
  searchQuery = "",
  onSearchChange,
  statusFilter = "All Status",
  onStatusChange,
  timeFilter = "All Times",
  onTimeChange,
  showCreateButton,
  onCreateClick,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    if (onCreateClick) onCreateClick();
  };

  return (
    <Box
      sx={{
        width: "100%", // تم التعديل ليكون العرض بالكامل
        mb: 2.5,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        boxSizing: "border-box",
      }}
    >
      {/* 1. حقل البحث */}
      <TextField
        value={searchQuery}
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        placeholder="Search admins by name, personal email, or staff ID..."
        size="small"
        sx={{
          flex: 1,
          width: { xs: "100%", sm: "auto" },
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            height: { xs: "40px", sm: "44px" },
            borderRadius: "8px",
            "& fieldset": { borderColor: "#E2E8F0" },
            "&:hover fieldset": { borderColor: "#CBD5E1" },
            "&.Mui-focused fieldset": { borderColor: "#014BA8" },
          },
          "& .MuiInputBase-input": {
            fontSize: { xs: "12.5px", sm: "14px" },
            color: "#1E293B",
            "&::placeholder": { color: "#94A3B8", opacity: 1 },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#94A3B8", fontSize: { xs: "18px", sm: "20px" } }} />
            </InputAdornment>
          ),
        }}
      />

      {/* 2. الفلاتر والزر */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 1.5 },
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "flex-start", sm: "flex-end" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {/* فلتر الأدوار Roles */}
        <FormControl size="small" sx={{ flex: { xs: 1, sm: "none" }, minWidth: { xs: "120px", sm: 140 } }}>
          <Select
            value={statusFilter || "All Status"}
            onChange={(e) => onStatusChange && onStatusChange(e.target.value)}
            displayEmpty
            sx={{
              height: { xs: "38px", sm: "44px" },
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 500,
              color: "#475569",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E2E8F0" },
            }}
          >
            <MenuItem value="All Status">All Roles</MenuItem>
            <MenuItem value="Active">Super Admin</MenuItem>
            <MenuItem value="Suspended">Manager</MenuItem>
          </Select>
        </FormControl>

        {/* فلتر الحالة Status */}
        <FormControl size="small" sx={{ flex: { xs: 1, sm: "none" }, minWidth: { xs: "120px", sm: 140 } }}>
          <Select
            value={timeFilter || "All Times"}
            onChange={(e) => onTimeChange && onTimeChange(e.target.value)}
            displayEmpty
            sx={{
              height: { xs: "38px", sm: "44px" },
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 500,
              color: "#475569",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E2E8F0" },
            }}
          >
            <MenuItem value="All Times">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>

        {/* زر الإنشاء */}
        {showCreateButton && (
          <Button
            onClick={handleOpenModal}
            startIcon={<AddIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />}
            sx={{
              height: { xs: "38px", sm: "44px" },
              px: { xs: 1.5, sm: 2.5 },
              width: { xs: "100%", sm: "auto" },
              borderRadius: "8px",
              background: "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: { xs: "12px", sm: "14px" },
              textTransform: "none",
              whiteSpace: "nowrap",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              "&:hover": {
                background: "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 145, 1) 100%)",
              },
            }}
          >
            Create Admin Individual
          </Button>
        )}
      </Box>

      {/* مودال الإنشاء */}
      <CreateAdminModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={(data) => {
          console.log("New Admin Data:", data);
        }}
      />
    </Box>
  );
};

export default TableFiltersBar;