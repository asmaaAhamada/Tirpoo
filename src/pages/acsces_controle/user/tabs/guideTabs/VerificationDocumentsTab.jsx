import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ApproveGuideModal from "../../action/ApproveGuideModal";
import RejectDocumentsModal from "../../action/RejectDocumentsModal";

const VerificationDocumentsTab = ({ guideName }) => {
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);

  const documents = [
    {
      id: 1,
      title: "National ID / Passport Scan",
      meta: "PDF • 2.4 MB • Uploaded on registration",
      url: "#",
    },
    {
      id: 2,
      title: "Official Tour Guide License",
      meta: "JPG Image • 4.1 MB • Issued by Ministry of Tourism",
      url: "#",
    },
  ];

  const handleViewFile = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3.5 },
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.02)",
      }}
    >
      {/* العناوين */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 0.5,
          lineHeight: 1.2,
        }}
      >
        Official Legal Credentials
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#64748B",
          fontWeight: 400,
          mb: 3,
        }}
      >
        Review the legal identification and licenses uploaded by the guide to operate.
      </Typography>

      {/* قائمة المستندات */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
        {documents.map((doc) => (
          <Box
            key={doc.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              backgroundColor: "#F8FAFC",
              borderRadius: "8px",
              border: "1px solid #F1F5F9",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* أيقونة/مربع حافلة الملف */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "6px",
                  backgroundColor: "#CBD5E1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#475569",
                  flexShrink: 0,
                }}
              >
                <InsertDriveFileOutlinedIcon />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1E293B",
                    lineHeight: 1.3,
                  }}
                >
                  {doc.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#64748B",
                    mt: "2px",
                  }}
                >
                  {doc.meta}
                </Typography>
              </Box>
            </Box>

            <Button
              onClick={() => handleViewFile(doc.url)}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#014BA8",
                textTransform: "none",
                p: "4px 8px",
                minWidth: "auto",
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

      {/* أزرار الإجراءات في الأسفل */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        {/* زر Reject Documents */}
        <Button
          onClick={() => setOpenRejectModal(true)}
          sx={{
            width: { xs: "100%", sm: "auto" },
            minWidth: "160px",
            height: "48px",
            borderRadius: "8px",
            border: "1px solid rgba(239, 68, 68, 1)",
            color: "rgba(239, 68, 68, 1)",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            backgroundColor: "transparent",
            px: 3,
            "&:hover": {
              backgroundColor: "rgba(239, 68, 68, 0.05)",
              borderColor: "rgba(239, 68, 68, 1)",
            },
          }}
        >
          Reject Documents
        </Button>

        {/* زر Approve & Activate Guide */}
        <Button
          onClick={() => setOpenApproveModal(true)}
          sx={{
            width: { xs: "100%", sm: "231px" },
            height: "48px",
            borderRadius: "8px",
            background:
              "linear-gradient(90deg, rgba(1, 75, 168, 1) 100%) rgba(0, 52, 128, 1) 0%",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 145, 1) 100%)",
            },
          }}
        >
          Approve & Activate Guide
        </Button>
      </Box>

      {/* مودالات الموافقة والرفض */}
      <ApproveGuideModal
        open={openApproveModal}
        onClose={() => setOpenApproveModal(false)}
        onConfirm={() => setOpenApproveModal(false)}
        userName={guideName}
      />

      <RejectDocumentsModal
        open={openRejectModal}
        onClose={() => setOpenRejectModal(false)}
        onConfirm={() => setOpenRejectModal(false)}
        userName={guideName}
      />
    </Box>
  );
};

export default VerificationDocumentsTab;