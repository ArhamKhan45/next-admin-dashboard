import React from "react";
import CopyRight from "@/app/_components/Dashboard/common/CopyRight";
import LeftMenuPanel from "../../dashboard/@LeftMenuPanel/page";
import TitleNav from "../../dashboard/@TitleNav/page";
import ViewProductDetails from "@/app/_components/Dashboard/Products/ViewProductDetails";

const AddProducts = () => {
  return (
    <div className="text-white flex ">
      <div className="bg-site-main  w-[300px] min-h-screen fixed ">
        <LeftMenuPanel />
      </div>

      <div className="  w-[calc(100%-350px)] ms-auto  pr-5 ">
        <TitleNav title={"View Product"} />
        <div className="bg-site-main">
          <ViewProductDetails />
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default AddProducts;
