import React, { useState } from "react";
import { Dialog, DialogContent, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Select, Input } from "antd";
import trashIcon from "../../../../assets/icon_SVG/tdesign_close-octagon.svg";

const { TextArea } = Input;

const RejectDocumentsModal = ({ open, onClose, onConfirm, userName }) => {
  const [reason, setReason] = useState(undefined);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onConfirm({ reason, message });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: "20px 24px",
          maxWidth: "480px",
          width: "100%",
          maxHeight: "none",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* الأيقونة العلوية */}
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            backgroundColor: "rgba(254, 226, 226, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 1.5,
          }}
        >
    <img src={trashIcon} alt="Trash" width={48} height={48} />
        </Box>

        {/* العنوان */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#000000",
            mb: 0.5,
          }}
        >
          Reject Guide Documents?
        </Typography>

        {/* النص الوصفي */}
        <Typography
          sx={{
            fontSize: "12px",
            color: "rgba(71, 85, 105, 1)",
            lineHeight: 1.4,
            mb: 2,
            px: { xs: 0, sm: 1 },
          }}
        >
          This will notify {userName || "Ralph Edwards"} that his application
          documents were declined. You must specify a valid reason.
        </Typography>

        {/* حقول الإدخال */}
        <Box sx={{ width: "100%", textAlign: "left", mb: 2 }}>
          {/* Rejection Reason */}
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#1E293B",
              mb: 0.5,
            }}
          >
            Rejection Reason <span style={{ color: "red" }}>*</span>
          </Typography>
          <Select
            placeholder="Select A Rejection Reason"
            value={reason}
            onChange={(val) => setReason(val)}
            style={{
              width: "100%",
              height: "40px",
              marginBottom: "12px",
            }}
            options={[
              { value: "unclear_id", label: "Unclear or Blurry ID/Passport" },
              { value: "expired_license", label: "Expired Tour Guide License" },
              { value: "mismatched_info", label: "Document Name Mismatch" },
              { value: "invalid_format", label: "Invalid File Format" },
            ]}
          />

          {/* Message to the Guide */}
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#1E293B",
              mb: 0.5,
            }}
          >
            Message to the Guide <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextArea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Provide clear instructions on what documents are missing or need correction..."
            style={{
              borderRadius: "8px",
              padding: "8px 12px",
              fontSize: "13px",
              resize: "none",
            }}
          />
        </Box>

        {/* أزرار التحكم */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            flexDirection: { xs: "column-reverse", sm: "row" },
            mt: 1,
          }}
        >
          {/* زر Cancel على اليسار */}
          <Button
            onClick={onClose}
            sx={{
              width: { xs: "100%", sm: "140px" },
              height: "42px",
              borderRadius: "8px",
              border: "1px solid rgba(1, 75, 168, 1)",
              color: "rgba(1, 75, 168, 1)",
              fontWeight: 600,
              fontSize: "14px",
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

          {/* زر Confirm Rejection على اليمين */}
          <Button
            onClick={handleSubmit}
            sx={{
              width: { xs: "100%", sm: "280px" },
              height: "42px",
              borderRadius: "8px",
              backgroundColor: "rgba(239, 68, 68, 1)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(220, 38, 38, 1)",
                boxShadow: "none",
              },
            }}
          >
            Confirm Rejection
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RejectDocumentsModal;