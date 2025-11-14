import Header from "@/components/site/header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-2 ">{children}</main>
    </div>
  );
}

export default layout;
