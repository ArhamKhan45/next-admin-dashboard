"use client";
import { Button } from "@/components/ui/button";
import { MyButtonProps } from "@/types/AdminDashboard/Dashboard.types";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const MyButton: React.FC<MyButtonProps> = ({ btnName, url, Icon }) => {
  return (
    <Button className="  active:bg-site-light-grey  py-6">
      <Link href={url ?? ""}>
        {Icon ?? <ShieldAlert className="me-2  inline-block" />}
        {btnName || "MyButton"}
      </Link>
    </Button>
  );
};

export default MyButton;
