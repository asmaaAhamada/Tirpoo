// src/pages/accessControl/modals/SuspendUserModal.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
} from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SuspendUserModal = ({ open, onClose, onConfirm, userName }) => {
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm({ reason, note });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: { xs: "16px", sm: "24px" },
          maxWidth: "560px",
          width: "100%",
          margin: { xs: "16px", sm: "32px" },
        },
      }}
    >
      <DialogContent sx={{ p: 0, textAlign: "center" }}>
        {/* 1. البوتون العلوي مع الأيقونة */}
        <Box
          sx={{
            width: { xs: 72, sm: 96 },
            height: { xs: 72, sm: 96 },
            borderRadius: "50%",
            backgroundColor: "rgba(1, 75, 168, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: { xs: 2, sm: 2.5 },
          }}
        >
          <BlockIcon
            sx={{
              fontSize: { xs: 36, sm: 48 },
              color: "rgba(1, 75, 168, 1)",
            }}
          />
        </Box>

        {/* 2. العنوان الرئيسي */}
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px" },
            fontWeight: 700,
            color: "#000000",
            mb: 1,
          }}
        >
          Suspend Traveler Account?
        </Typography>

        {/* 3. النص الوصفي */}
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "rgba(71, 85, 105, 1)",
            lineHeight: 1.5,
            mb: { xs: 2.5, sm: 3 },
            px: { xs: 0, sm: 1 },
          }}
        >
          This will temporarily restrict {userName || "Jane Cooper"} from booking
          new tours or logging into the Tripooo application. You can restore
          access at any time.
        </Typography>

        {/* 4. النموذج (Form) */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 2.5 },
            textAlign: "left",
          }}
        >
          {/* الحقل الأول: Reason for Suspension */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px" },
                fontWeight: 600,
                color: "#1E293B",
                mb: 0.8,
              }}
            >
              Reason for Suspension{" "}
              <Box component="span" sx={{ color: "#EF4444" }}>
                *
              </Box>
            </Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                IconComponent={KeyboardArrowDownIcon}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <Typography sx={{ color: "#94A3B8", fontSize: { xs: "13px", sm: "14px" } }}>
                        Select A Predefined Reason
                      </Typography>
                    );
                  }
                  return selected;
                }}
                sx={{
                  borderRadius: "8px",
                  fontSize: { xs: "13px", sm: "14px" },
                  backgroundColor: "#FFFFFF",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CBD5E1",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(1, 75, 168, 1)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(1, 75, 168, 1)",
                  },
                  "& .MuiSelect-icon": {
                    color: "#64748B",
                  },
                }}
              >
                <MenuItem value="Terms Violation">Terms Violation</MenuItem>
                <MenuItem value="Fraudulent Activity">Fraudulent Activity</MenuItem>
                <MenuItem value="Unpaid Fees">Unpaid Fees</MenuItem>
                <MenuItem value="Other">Other Reason</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* الحقل الثاني: Internal Explanatory Note */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px" },
                fontWeight: 600,
                color: "#1E293B",
                mb: 0.8,
              }}
            >
              Internal Explanatory Note{" "}
              <Box component="span" sx={{ color: "#EF4444" }}>
                *
              </Box>
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Provide a mandatory detailed log or reason to justify this enforcement action..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: { xs: "13px", sm: "14px" },
                  p: 1.5,
                  "& fieldset": {
                    borderColor: "#CBD5E1",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(1, 75, 168, 1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(1, 75, 168, 1)",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#94A3B8",
                  opacity: 1,
                  fontSize: { xs: "13px", sm: "14px" },
                },
              }}
            />
          </Box>

          {/* 5. أزرار الإجراءات */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mt: { xs: 1, sm: 1.5 },
              flexDirection: { xs: "column-reverse", sm: "row" },
            }}
          >
            {/* زر Cancel */}
            <Button
              onClick={onClose}
              sx={{
                width: { xs: "100%", sm: "168px" },
                height: "48px",
                borderRadius: "8px",
                border: "1px solid rgba(1, 75, 168, 1)",
                color: "rgba(1, 75, 168, 1)",
                fontWeight: 600,
                fontSize: { xs: "13px", sm: "14px" },
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(1, 75, 168, 0.05)",
                  borderColor: "rgba(1, 75, 168, 1)",
                },
              }}
            >
              Cancel
            </Button>

            {/* زر Suspend User */}
            <Button
              type="submit"
              sx={{
                width: { xs: "100%", sm: "354px" },
                height: "48px",
                borderRadius: "8px",
                background:
                  "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: { xs: "13px", sm: "14px" },
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 145, 1) 100%)",
                  boxShadow: "none",
                },
              }}
            >
              Suspend User
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SuspendUserModal;