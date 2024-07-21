"use client";
import Link from "next/link";
import React from "react";

const ViewProductDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 ">
      <input
        type="text"
        name="title"
        id=""
        readOnly
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="text"
        name=""
        id=""
        readOnly
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="number"
        name=""
        readOnly
        id=""
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="number"
        name=""
        readOnly
        id=""
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="text"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="text"
        name=""
        readOnly
        id=""
        className="bg-site-outer p-3 rounded-md"
      />

      <textarea
        name="description"
        id=""
        readOnly
        className="col-span-full bg-site-outer p-3 rounded-md resize-none h-[210px]"
      />
      <Link
        className="text-center bg-site-btn-green col-span-full py-3 rounded-md placeholder:text-muted-foreground"
        href={"/admin/dashboard"}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default ViewProductDetails;
