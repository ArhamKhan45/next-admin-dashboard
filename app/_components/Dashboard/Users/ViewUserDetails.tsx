"use client";
import Link from "next/link";
import React from "react";

const ViewUserDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 ">
      <input
        type="text"
        name="username"
        id=""
        readOnly
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="text"
        name="fullname"
        readOnly
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="email"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="password"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="password"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />

      <input
        type="number"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="text"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="text"
        name=""
        id=""
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />

      <textarea
        name="description"
        readOnly
        id=""
        className="col-span-full bg-site-outer p-3 rounded-md placeholder:text-muted-foreground resize-none h-[210px]"
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

export default ViewUserDetails;
