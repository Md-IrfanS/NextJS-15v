import React from "react";
import Card from "../../.next/components/Card";

const DashboardLayout = ({
  children,
  users,
  profile,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  profile: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        {/* DashboardLayout */}
        <div className="flex flex-col">
          {users}
          {profile}
        </div>
        <div className="flex flex-1">{notification}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
