import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-site-outer text-site-color">
      {children}
    </div>
  );
};

export default layout;
