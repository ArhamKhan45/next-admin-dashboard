"use client";
import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "page 404 ",
};

function Notfound() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-700 flex justify-center flex-col gap-4 text-white text-center">
      <h1 className="text-2xl">Page Not Available</h1>
      <p className="text-lg">Error:404</p>
      <Button
        onClick={handleGoHome}
        className="w-fit bg-white text-black mx-auto hover:ring-4 hover:ring-blue-500 hover:bg-white"
      >
        Go To Home {"{"} / {"}"}
      </Button>
    </div>
  );
}

export default Notfound;
