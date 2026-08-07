// src/components/TableFiltersBar.jsx
import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TableFiltersBar = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  timeFilter,
  onTimeChange,
  searchPlaceholder = "Search by name, email, or unique ID...",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 1.5,
        mb: 2.5,
        width: "100%",
        maxWidth: "1120px",
        mx: "auto",
      }}
    >
      {/* حقل البحث */}
      <TextField
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#94A3B8" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: 1,
          width: { xs: "100%", sm: "auto" },
          height: "48px",
          "& .MuiOutlinedInput-root": {
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            fontSize: { xs: "13px", sm: "14px" },
            "& fieldset": { borderColor: "rgba(226, 232, 240, 1)" },
            "&:hover fieldset": { borderColor: "#CBD5E1" },
            "&.Mui-focused fieldset": { borderColor: "#014BA8" },
          },
        }}
      />

      {/* فلتر الحالة All Status */}
      <FormControl
        size="small"
        sx={{
          minWidth: { xs: "100%", sm: "120px" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            fontSize: "13px",
            fontWeight: 500,
            color: "#334155",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(226, 232, 240, 1)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CBD5E1",
            },
          }}
        >
          <MenuItem value="All Status">All Status</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Suspended">Suspended</MenuItem>
        </Select>
      </FormControl>

      {/* فلتر الوقت All Times */}
      <FormControl
        size="small"
        sx={{
          minWidth: { xs: "100%", sm: "120px" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Select
          value={timeFilter}
          onChange={(e) => onTimeChange(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            fontSize: "13px",
            fontWeight: 500,
            color: "#334155",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(226, 232, 240, 1)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CBD5E1",
            },
          }}
        >
          <MenuItem value="All Times">All Times</MenuItem>
          <MenuItem value="This Week">This Week</MenuItem>
          <MenuItem value="This Month">This Month</MenuItem>
          <MenuItem value="This Year">This Year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TableFiltersBar;