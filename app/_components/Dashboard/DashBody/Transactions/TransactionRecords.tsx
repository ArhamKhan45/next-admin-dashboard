import { cn } from "@/lib/utils";
import { TransactionRecordsProps } from "@/types/AdminDashboard/Dashboard.types";
import Image from "next/image";
import React from "react";

const TransactionRecords: React.FC<{
  transactionData: TransactionRecordsProps;
}> = ({ transactionData }) => {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex mb-4">
        <p className="w-[35%] font-semibold">Name</p>
        <p className="w-[20%] font-semibold">Status</p>
        <p className="w-[25%] font-semibold">Date</p>
        <p className="w-[20%] font-semibold">Amount</p>
      </div>
      {transactionData.map((transaction, index) => (
        <div className="flex mb-4 items-center font-medium" key={index}>
          <div className="w-[35%] flex items-center">
            <Image
              src={"/dashboard/default-user.jpg"}
              width={0}
              height={0}
              quality={75}
              sizes="100vw"
              className="w-[36px] h-[36px] rounded-[50%]  me-2 "
              alt="User-image"
            />
            <p className=" w-[200px] ">{transaction.title}</p>
          </div>
          <div className="w-[20%] ">
            <p
              className={cn("w-fit  px-2 rounded", {
                "bg-[#6A7D8F]": transaction.status === "Success",
                "bg-[#7D6E55]": transaction.status === "Pending",
                "bg-[#7C4657]": transaction.status === "Failed",
              })}
            >
              {transaction.status}
            </p>
          </div>
          <div className="w-[25%]">
            <p className="w-[100px]  ">{transaction.date}</p>
          </div>
          <div className="w-[20%]">
            <p className="w-[100px] ">${transaction.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionRecords;
