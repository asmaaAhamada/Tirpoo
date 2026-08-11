import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Divider,
} from "@mui/material";

// أيقونات Material-UI
import GroupOutlineIcon from "@mui/icons-material/PeopleOutline";
import icon from '../../../assets/icon_SVG/fluent_style-guide-24-regular.svg'
export const SuperAdminPermissions = () => {
  // حالة الصلاحيات المفعلة
  const [permissions, setPermissions] = useState({
    viewUserProfiles: true,
    createNewAdmins: true,
    suspendUserAccounts: false,
    modifyAdminRoles: false,
    viewRevenueAnalytics: true,
    approvePartnerPayouts: true,
    issueRefunds: true,
    exportTaxReports: false,
  });

  // التحكم في اختيار الكل للقسم الأول
  const group1Keys = [
    "viewUserProfiles",
    "createNewAdmins",
    "suspendUserAccounts",
    "modifyAdminRoles",
  ];
  const isGroup1AllSelected = group1Keys.every((key) => permissions[key]);

  // التحكم في اختيار الكل للقسم الثاني
  const group2Keys = [
    "viewRevenueAnalytics",
    "approvePartnerPayouts",
    "issueRefunds",
    "exportTaxReports",
  ];
  const isGroup2AllSelected = group2Keys.every((key) => permissions[key]);

  const handleCheckboxChange = (key) => (event) => {
    setPermissions({ ...permissions, [key]: event.target.checked });
  };

  const handleSelectAllGroup = (groupKeys, isChecked) => {
    const updated = { ...permissions };
    groupKeys.forEach((key) => {
      updated[key] = isChecked;
    });
    setPermissions(updated);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1120px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        p: 3,
        boxSizing: "border-box",
      }}
    >
      {/* العنوان الرئيسي */}
      <Typography
        variant="h6"
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 3,
        }}
      >
        Super Admin Permissions
      </Typography>

      {/* القسم الأول: User & Admin Management */}
      <Box
        sx={{
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          overflow: "hidden",
          mb: 3,
        }}
      >
        {/* هيدر القسم */}
        <Box
          sx={{
            backgroundColor: "#F8FAFC",
            px: 2.5,
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GroupOutlineIcon sx={{ color: "#64748B", fontSize: 20 }} />
            <Typography
              sx={{ fontSize: "14px", fontWeight: 600, color: "#334155" }}
            >
              User & Admin Management
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={isGroup1AllSelected}
                onChange={(e) =>
                  handleSelectAllGroup(group1Keys, e.target.checked)
                }
                size="small"
              />
            }
            label={
              <Typography
                sx={{ fontSize: "13px", fontWeight: 500, color: "#64748B" }}
              >
                Select All
              </Typography>
            }
          />
        </Box>

        {/* محتوى الخيارات للقسم الأول */}
        <Box sx={{ p: 2.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.viewUserProfiles}
                    onChange={handleCheckboxChange("viewUserProfiles")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    View User Profiles
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.suspendUserAccounts}
                    onChange={handleCheckboxChange("suspendUserAccounts")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    Suspend User Accounts
                  </Typography>
                }
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.createNewAdmins}
                    onChange={handleCheckboxChange("createNewAdmins")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    Create New Admins
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.modifyAdminRoles}
                    onChange={handleCheckboxChange("modifyAdminRoles")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    Modify Admin Roles
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* القسم الثاني: Financials & Payouts */}
      <Box
        sx={{
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          overflow: "hidden",
          mb: 3,
        }}
      >
        {/* هيدر القسم الثاني */}
        <Box
          sx={{
            backgroundColor: "#F8FAFC",
            px: 2.5,
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
            src ={icon}
              sx={{ color: "#64748B", fontSize: 20 }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: 600, color: "#334155" }}
            >
              Financials & Payouts
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={isGroup2AllSelected}
                onChange={(e) =>
                  handleSelectAllGroup(group2Keys, e.target.checked)
                }
                size="small"
              />
            }
            label={
              <Typography
                sx={{ fontSize: "13px", fontWeight: 500, color: "#64748B" }}
              >
                Select All
              </Typography>
            }
          />
        </Box>

        {/* محتوى الخيارات للقسم الثاني */}
        <Box sx={{ p: 2.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.viewRevenueAnalytics}
                    onChange={handleCheckboxChange("viewRevenueAnalytics")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    View Revenue Analytics
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.issueRefunds}
                    onChange={handleCheckboxChange("issueRefunds")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    Issue Refunds
                  </Typography>
                }
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.approvePartnerPayouts}
                    onChange={handleCheckboxChange("approvePartnerPayouts")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    Approve Partner Payouts
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions.exportTaxReports}
                    onChange={handleCheckboxChange("exportTaxReports")}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}
                  >
                    Export Tax Reports
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* أزرار الحفظ والإلغاء */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
             width:{ xs:"50px",        md:"90px"},
            textTransform: "none",
            borderRadius: "8px",
            px: 3,
            py: 1,
            color: "#014BA8",
            borderColor: "#014BA8",
            fontWeight: 600,
            fontSize: "14px",
            "&:hover": {
              borderColor: "#003480",
              backgroundColor: "rgba(1, 75, 168, 0.04)",
            },
          }}
        >
          Discard
        </Button>
        <Button
          variant="contained"
          sx={{
            width:{ xs:"200px",        md:"354px"},
            textTransform: "none",
            borderRadius: "8px",
            px: 4,
            py: 1,
            backgroundColor: "#014BA8",
            fontWeight: 600,
            fontSize: "14px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#003480",
              boxShadow: "none",
            },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default SuperAdminPermissions;