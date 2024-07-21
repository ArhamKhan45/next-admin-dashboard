import React from "react";

import AddNewUser from "@/app/_components/Dashboard/Users/AddNewUser";
import LeftMenuPanel from "../../dashboard/@LeftMenuPanel/page";
import TitleNav from "../../dashboard/@TitleNav/page";
import CopyRight from "@/app/_components/Dashboard/common/CopyRight";

const AddUsers = () => {
  return (
    <div className="text-white flex ">
      <div className="bg-site-main  w-[300px] min-h-screen fixed ">
        <LeftMenuPanel />
      </div>

      <div className="  w-[calc(100%-350px)] ms-auto  pr-5 ">
        <TitleNav title={"Add User"} />
        <div className="bg-site-main">
          <AddNewUser />
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default AddUsers;
