// src/components/action/ApprovePartnerModal.jsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const ApprovePartnerModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ fontWeight: 700 }}>Approve Corporate Partner</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          هل أنت تأكد من الموافقة على الشريك التجاري؟
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">إلغاء</Button>
        <Button onClick={onClose} variant="contained" color="primary">تأكيد القبول</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApprovePartnerModal;