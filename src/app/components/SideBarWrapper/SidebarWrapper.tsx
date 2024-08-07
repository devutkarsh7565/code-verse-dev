import React from "react";
import AppIconWrapper from "./AppIconWrapper";
import LinksComponents from "./LinksComponents";
import LogoutButton from "./LogoutButton";

const SidebarWrapper = () => {
  return (
    <div className="bg-white w-56 min-h-screen fixed top-0 bottom-0 flex flex-col gap-20 py-7 px-5">
      <AppIconWrapper />
      <LinksComponents />
      <LogoutButton />
    </div>
  );
};

export default SidebarWrapper;
