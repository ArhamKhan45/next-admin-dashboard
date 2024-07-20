"use client";
import { usePathname } from "next/navigation";
import React from "react";
interface GetTheTitleProps {
  title: string;
}

const GetTheTitle: React.FC<GetTheTitleProps> = ({ title }) => {
  const url: string = usePathname();
  const titleIndex: number = url.split("/").length - 1;
  const customtitle: string = url.split("/")[titleIndex];
  return (
    <h1 className="font-semibold text-xl capitalize">{title ?? customtitle}</h1>
  );
};

export default GetTheTitle;
