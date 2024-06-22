"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const GetTheTitle = () => {
  const url: string = usePathname();
  const titleIndex: number = url.split("/").length - 1;
  const title: string = url.split("/")[titleIndex];
  return <h1 className="font-semibold text-xl capitalize">{title}</h1>;
};

export default GetTheTitle;
