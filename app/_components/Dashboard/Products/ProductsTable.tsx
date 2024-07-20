"use client";
import React, { useState } from "react";
import SearchBox from "../common/Search";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Pagination from "../common/pagination";
import { ProductDataTableProps } from "@/types/AdminDashboard/Dashboard.types";
import AddNew from "../common/AddNew";
import { useRouter } from "next/navigation";

const ProductsTable: React.FC<ProductDataTableProps> = ({ productsData }) => {
  const [word, setWord] = useState<string | undefined>(undefined);
  const router = useRouter();
  const showProductsData = (
    <>
      {productsData
        .filter(
          (product) =>
            !word ||
            product.title.toLowerCase().includes(word.toLowerCase()) ||
            product.description.toLowerCase().includes(word.toLowerCase())
        )
        .map((product) => (
          <div
            className="flex flex-wrap items-center justify-between"
            key={product.id}
          >
            <div className="flex items-center w-[18%]">
              <Image
                src="/dashboard/noproduct.jpg"
                width={36}
                height={36}
                quality={75}
                sizes="100vw"
                className="w-[36px] h-[36px] rounded-full mr-2"
                alt="Product image"
              />
              <p className="w-auto">{product.title}</p>
            </div>
            <div className="w-[30%]">
              <p>{product.description}</p>
            </div>
            <div className="w-[110px]">
              <p>${product.price}</p>
            </div>
            <div className="w-[110px]">
              <p>{product.createdAt}</p>
            </div>
            <div className="w-[40px]">
              <p>{product.stock}</p>
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
  const addNewHandler = () => {
    router.push("/admin/products/addproduct");
  };
  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <SearchBox
          searchCn="w-[230px] rounded-lg"
          myplaceholder="Search for a product"
          handler={setWord}
        />
        <AddNew AddNewHandler={addNewHandler} />
      </div>
      {/* table of products*/}
      <div className="mt-4">
        <div className=" mb-4 items-center justify-between font-semibold hidden 2xl:flex">
          <p className="w-[18%] ">Title</p>
          <p className="w-[30%] ">Description</p>
          <p className="w-[110px] ">Price</p>
          <p className="w-[110px] ">Created at</p>
          <p className="w-[40px] ">Stock</p>
          <p className="w-[18%]  opacity-0">Action</p>
        </div>
        <div className="flex flex-col gap-3 mb-4">{showProductsData}</div>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsTable;
