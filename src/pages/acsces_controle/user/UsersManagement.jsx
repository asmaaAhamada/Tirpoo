// src/pages/accessControl/UsersManagement.jsx
import React, { useState } from "react";
import StateUserCard from "./state_user";
import UsersMasterDirectory from "./UsersMasterDirectory";
import TableFiltersBar from "./action/TableFiltersBar";
import UsersTableContainer from "./UsersTableContainer";
import GuidesTable from "./mainTableUser/GuidesTable";
import CompaniesTable from "./mainTableUser/CompaniesTable";
import AdminUsersTable from "./mainTableUser/AdminUsersTable";

const UsersManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [timeFilter, setTimeFilter] = useState("All Times");

  const handleCreateAdmin = () => {
    // فتح مودال إضافة أدمن جديد عند النقر
    console.log("Open Create Admin Modal");
  };

  const renderTabContent = () => {
    const filterProps = { searchQuery, statusFilter, timeFilter };

    switch (activeTab) {
      case 0:
        return <UsersTableContainer {...filterProps} />;
      case 1:
        return <GuidesTable {...filterProps} />;
      case 2:
        return <CompaniesTable {...filterProps} />;
      case 3:
        return <AdminUsersTable {...filterProps} />;
      default:
        return <UsersTableContainer {...filterProps} />;
    }
  };

  return (
    <>
      <StateUserCard />

      <UsersMasterDirectory
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <TableFiltersBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        timeFilter={timeFilter}
        onTimeChange={setTimeFilter}
        showCreateButton={activeTab === 3} // يظهر فقط عند التاب الأخيرة (Admin Users)
        onCreateClick={handleCreateAdmin}
      />

      {renderTabContent()}
    </>
  );
};

export default UsersManagement;