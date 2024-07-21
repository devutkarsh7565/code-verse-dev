import SidebarWrapper from "@/app/components/SideBarWrapper/SidebarWrapper";
import React from "react";

const RouterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen w-full bg-slate-100">
        <SidebarWrapper />
        <div className="pl-56">{children}</div>
      </div>
    </>
  );
};

export default RouterLayout;
