// src/components/action/RejectChangesModal.jsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const RejectChangesModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ fontWeight: 700, color: "#DC2626" }}>Reject & Request Changes</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          هل أنت متاكد من رفض الطلب والمطالبة بتعديلات؟
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">إلغاء</Button>
        <Button onClick={onClose} variant="contained" color="error">تأكيد الرفض</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RejectChangesModal;