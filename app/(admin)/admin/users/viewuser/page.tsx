import React from "react";

import LeftMenuPanel from "../../dashboard/@LeftMenuPanel/page";
import TitleNav from "../../dashboard/@TitleNav/page";
import CopyRight from "@/app/_components/Dashboard/common/CopyRight";
import AddNewUserDetails from "@/app/_components/Dashboard/Users/ViewUserDetails";

const AddUsers = () => {
  return (
    <div className="text-white flex ">
      <div className="bg-site-main  w-[300px] min-h-screen fixed ">
        <LeftMenuPanel />
      </div>

      <div className="  w-[calc(100%-350px)] ms-auto  pr-5 ">
        <TitleNav title={"View User"} />
        <div className="bg-site-main">
          <AddNewUserDetails />
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default AddUsers;
