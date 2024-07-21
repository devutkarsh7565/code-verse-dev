import React from "react";

const RouterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default RouterLayout;
