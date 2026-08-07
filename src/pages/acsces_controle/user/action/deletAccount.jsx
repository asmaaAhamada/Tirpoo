// src/pages/accessControl/modals/DeleteUserModal.jsx
import React from "react";
import { Dialog, DialogContent, Box, Typography, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import trashIcon from "../../../../assets/icon_SVG/trash.svg";const DeleteUserModal = ({ open, onClose, onConfirm, userName }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "560px",
          width: "100%",
        },
      }}
    >
      <DialogContent sx={{ p: 0, textAlign: "center" }}>
        {/* الأيقونة العلوية */}
        <Box
          sx={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            backgroundColor: "rgba(254, 226, 226, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
          }}
        >
            
    <img src={trashIcon} alt="Trash" width={48} height={48} />
        </Box>

        {/* العنوان */}
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#000000",
            mb: 1.5,
          }}
        >
          Permanently Delete Account?
        </Typography>

        {/* النص الوصفي */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "rgba(71, 85, 105, 1)",
            lineHeight: 1.6,
            mb: 4,
            px: { xs: 0, sm: 2 },
          }}
        >
          Are you sure you want to delete {userName || "Jane Cooper"}'s profile?
          This action is permanent and will wipe all their personal data from
          Tripooo Hub. This cannot be undone.
        </Typography>

        {/* أزرار التحكم */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
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

          {/* زر Delete Account */}
          <Button
            onClick={onConfirm}
            sx={{
              width: { xs: "100%", sm: "354px" },
              height: "48px",
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
            Delete Account
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserModal;