import React from "react";
import LeftMenuPanel from "../dashboard/@LeftMenuPanel/page";
import TitleNav from "../dashboard/@TitleNav/page";
import CopyRight from "@/app/_components/Dashboard/common/CopyRight";
import ProductsTable from "@/app/_components/Dashboard/Products/ProductsTable";

const ShowProducts = () => {
  const productsData = [
    {
      id: "1",
      title: "iPhone",
      description: "Latest iPhone with advanced features and sleek design.",
      price: 100,
      createdAt: "Oct 29 2023",
      stock: 88,
    },
    {
      id: "2",
      title: "Samsung Galaxy",
      description: "Samsung Galaxy with stunning display and great camera.",
      price: 90,
      createdAt: "Oct 30 2023",
      stock: 45,
    },
    {
      id: "3",
      title: "Google Pixel",
      description: "Google Pixel offering pure Android experience and quality.",
      price: 80,
      createdAt: "Oct 31 2023",
      stock: 60,
    },
    {
      id: "4",
      title: "OnePlus",
      description: "OnePlus phone with fast performance and stylish look.",
      price: 85,
      createdAt: "Nov 01 2023",
      stock: 70,
    },
    {
      id: "5",
      title: "Sony Xperia",
      description:
        "Sony Xperia known for its durability and excellent display.",
      price: 95,
      createdAt: "Nov 02 2023",
      stock: 50,
    },
  ];

  return (
    <div className="text-white flex ">
      <div className="bg-site-main  w-[300px] min-h-screen fixed ">
        <LeftMenuPanel />
      </div>

      <div className="  w-[calc(100%-350px)] ms-auto  pr-5 ">
        <TitleNav />
        <div className="bg-site-main">
          <ProductsTable productsData={productsData} />
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default ShowProducts;
