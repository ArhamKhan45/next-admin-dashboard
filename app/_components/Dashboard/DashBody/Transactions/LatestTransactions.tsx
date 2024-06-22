// it will be a server page and If its parent is a client page the we have to use composition pattern
/* <client><server/></client> */

import React from "react";
import TransactionRecords from "./TransactionRecords";
import { TransactionRecordsProps } from "@/types/AdminDashboard/Dashboard.types";

// sort the array by date and then show the list of 10 latest items
const transactionData: TransactionRecordsProps = [
  {
    title: "John Anerian",
    status: "Success",
    date: "2024-06-01",
    amount: 50.75,
  },
  {
    title: "Mary Anerian",
    status: "Pending",
    date: "2024-06-02",
    amount: 10.0,
  },
  {
    title: "Alice Anerian",
    status: "Success",
    date: "2024-06-03",
    amount: 100.99,
  },
  {
    title: "Bob Anerian",
    status: "Failed",
    date: "2024-06-04",
    amount: 75.25,
  },
  {
    title: "Eve Anerian",
    status: "Success",
    date: "2024-06-05",
    amount: 45.3,
  },
];

const LatestTransactions = () => {
  return (
    <div className="bg-site-main px-4 py-5 rounded-lg">
      <h3 className="text-lg font-light mb-4">Latest Transactions</h3>
      <TransactionRecords transactionData={transactionData} />
    </div>
  );
};

export default LatestTransactions;
