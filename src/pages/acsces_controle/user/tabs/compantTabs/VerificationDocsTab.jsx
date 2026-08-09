// src/components/tabs/companyTabs/VerificationDocsTab.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

const VerificationDocsTab = () => {
  // حالة المودال للمعاينة مع بيانات الملف المختار
  const [previewFile, setPreviewFile] = useState(null);

  const documents = [
    {
      id: 1,
      title: "Commercial Registration License (CR)",
      info: "PDF • 2.4 MB • Uploaded June 14, 2026",
      fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // رابط تجريبي
      type: "pdf",
    },
    {
      id: 2,
      title: "Tourism Operator & Ministry License",
      info: "JPG Image • 4.1 MB • Expires Dec 2026",
      fileUrl: "https://via.placeholder.com/800x600?text=Tourism+License+Document", // صورة تجريبية
      type: "image",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2.5, sm: 4 },
      }}
    >
      {/* العنوان والوصف الرئيسي */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#0F172A", mb: 0.5 }}>
        Required Legal Documentation
      </Typography>

      <Typography sx={{ fontSize: "14px", color: "#64748B", mb: 3 }}>
        Examine certificates carefully to confirm validity, stamps, and signatures before verifying this agency.
      </Typography>

      {/* قائمة المستندات */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {documents.map((doc) => (
          <Box
            key={doc.id}
            sx={{
              width: "100%",
              maxWidth: "908px",
              minHeight: "72px",
              backgroundColor: "#F8FAFC",
              borderRadius: "8px",
              border: "1px solid #E2E8F0",
              p: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            {/* اليسار: آيقونة/صورة المعاينة المصغرة + المعلومات */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: "#E2E8F0",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94A3B8",
                }}
              >
                <InsertDriveFileOutlinedIcon />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
                  {doc.title}
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#64748B", mt: "4px" }}>
                  {doc.info}
                </Typography>
              </Box>
            </Box>

            {/* اليمين: زر عرض الملف */}
            <Button
              onClick={() => setPreviewFile(doc)}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#014BA8",
                textTransform: "none",
                p: "6px 12px",
                "&:hover": {
                  backgroundColor: "rgba(1, 75, 168, 0.08)",
                },
              }}
            >
              View File
            </Button>
          </Box>
        ))}
      </Box>

      {/* مودال معاينة الملف */}
      <Dialog
        open={Boolean(previewFile)}
        onClose={() => setPreviewFile(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {previewFile?.title}
          </Typography>
          <IconButton onClick={() => setPreviewFile(null)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ minHeight: "450px", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
          {previewFile?.type === "image" ? (
            <Box
              component="img"
              src={previewFile.fileUrl}
              alt={previewFile.title}
              sx={{ maxWidth: "100%", maxHeight: "500px", borderRadius: "8px" }}
            />
          ) : (
            <iframe
              src={previewFile?.fileUrl}
              title={previewFile?.title}
              width="100%"
              height="500px"
              style={{ border: "none", borderRadius: "8px" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default VerificationDocsTab;