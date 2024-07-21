"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddNewUser = () => {
  const EkeyHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "E" || event.key === "e") {
      event.preventDefault();
    }
  };
  const MaxInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value.length > 4) {
      event.target.value = event.target.value.slice(0, 4);
    }
  };
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 ">
      <input
        type="text"
        name="username"
        id=""
        placeholder="Username"
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="text"
        name="fullname"
        id=""
        placeholder="full Name"
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="email"
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Confirm Password"
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />

      <input
        type="number"
        name=""
        id=""
        placeholder="Phone No."
        className="bg-site-outer p-3 rounded-md placeholder:text-muted-foreground"
      />
      <Select name="isAdmin">
        <SelectTrigger className=" bg-site-outer p-3 rounded-md  w-full  ring-0 focus:border-0 border-0 focus:ring-0 ring-offset-0 focus:ring-offset-0 data-[placeholder]:text-muted-foreground">
          <SelectValue placeholder="isAdmin" className="hover:bg-site-main " />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="bg-site-outer p-3 rounded-md  text-white  ">
            <SelectLabel>isAdmin</SelectLabel>
            <SelectItem
              value="Admin"
              className="focus:bg-site-light-grey focus:text-white"
            >
              Admin
            </SelectItem>
            <SelectItem
              value="Client"
              className="focus:bg-site-light-grey focus:text-white"
            >
              Client
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select name="isActive">
        <SelectTrigger className="w-full bg-site-outer p-3 rounded-md placeholder:text-muted-foreground ring-0 focus:border-0 border-0 focus:ring-0 ring-offset-0 focus:ring-offset-0 data-[placeholder]:text-muted-foreground">
          <SelectValue placeholder="isActive" className="hover:bg-site-main" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="bg-site-outer p-3 rounded-md  text-white  ">
            <SelectLabel>isActive</SelectLabel>
            <SelectItem
              value="Active"
              className="focus:bg-site-light-grey focus:text-white"
            >
              Active
            </SelectItem>
            <SelectItem
              value="Passive"
              className="focus:bg-site-light-grey focus:text-white  "
            >
              Passive
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <textarea
        name="description"
        placeholder="Description"
        id=""
        className="col-span-full bg-site-outer p-3 rounded-md placeholder:text-muted-foreground resize-none h-[210px]"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-site-btn-green col-span-full py-3 rounded-md placeholder:text-muted-foreground"
      />
    </form>
  );
};

export default AddNewUser;
