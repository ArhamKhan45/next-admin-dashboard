"use client";
import { Button } from "@/components/ui/button";
import { AddNewButtonPageProps } from "@/types/AdminDashboard/Dashboard.types";
import React from "react";

const AddNew: React.FC<AddNewButtonPageProps> = ({ AddNewHandler }) => {
  return (
    <Button
      className="bg-violet-500 text-white px-3 hover:bg-violet-300"
      onClick={AddNewHandler}
    >
      Add New
    </Button>
  );
};

export default AddNew;
