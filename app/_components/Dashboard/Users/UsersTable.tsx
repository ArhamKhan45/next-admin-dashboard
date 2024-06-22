"use client";
import React, { useState } from "react";
import SearchBox from "../common/Search";
import AddNewBtn from "../common/AddNew";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Pagination from "../common/pagination";
import { UserDataTableProps } from "@/types/AdminDashboard/Dashboard.types";

const UsersTable: React.FC<{ usersData: UserDataTableProps }> = ({
  usersData,
}) => {
  const [word, setWord] = useState<string | undefined>(undefined);

  const showUsersData = (
    <>
      {usersData
        .filter(
          (user) =>
            !word ||
            user.name.toLowerCase().includes(word.toLowerCase()) ||
            user.email.toLowerCase().includes(word.toLowerCase())
        )
        .map((user) => (
          <div
            className="flex flex-wrap items-center justify-between"
            key={user.id}
          >
            <div className="flex items-center w-[18%]">
              <Image
                src="/dashboard/default-user.jpg"
                width={36}
                height={36}
                quality={75}
                sizes="100vw"
                className="w-[36px] h-[36px] rounded-full mr-2"
                alt="User image"
              />
              <p className="w-auto">{user.name}</p>
            </div>
            <div className="w-[18%]">
              <p>{user.email}</p>
            </div>
            <div className="w-[110px]">
              <p>{user.createdAt}</p>
            </div>
            <div className="w-[60px]">
              <p>{user.role}</p>
            </div>
            <div className="w-[80px]">
              <p>{user.action}</p>
            </div>
            <div className="w-[18%] flex space-x-2">
              <Button className="bg-green-600 hover:bg-green-500 text-white active:bg-green-400">
                View
              </Button>
              <Button className="bg-red-600 hover:bg-red-500 text-white active:bg-red-400">
                Delete
              </Button>
            </div>
          </div>
        ))}
    </>
  );

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <SearchBox
          searchCn="w-[230px] rounded-lg"
          myplaceholder="Search for a user"
          handler={setWord}
        />
        <AddNewBtn />
      </div>
      {/* table */}
      <div className="mt-4">
        <div className=" mb-4 items-center justify-between font-semibold hidden 2xl:flex">
          <p className="w-[18%] ">Name</p>
          <p className="w-[18%] ">Email</p>
          <p className="w-[110px] ">Created at</p>
          <p className="w-[60px] ">Role</p>
          <p className="w-[80px] ">Action</p>
          <p className="w-[18%]  opacity-0">Controls</p>
        </div>
        <div className="flex flex-col gap-3 mb-4">{showUsersData}</div>
      </div>
      <Pagination />
    </div>
  );
};

export default UsersTable;

// Name:Arham Khan
// Email:hello45@gmail.com
// Created at:Oct 30 2023
// Role :client
// Action:passive
