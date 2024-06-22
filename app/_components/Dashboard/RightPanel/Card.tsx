import React from "react";
import MyButton from "./MyButton";
import { RightCardProps } from "@/types/AdminDashboard/Dashboard.types";

const RightCard: React.FC<RightCardProps> = ({
  brandName,
  heading,
  url,
  readTime,
  paragraph,
  btnName,
  Icon,
}) => {
  return (
    <div className="w-full h-[350px] mb-4 rounded-lg bg-[bottom_10px_right_1rem]  bg-[length:200px_200px] bg-no-repeat  bg-[url('/dashboard/astronaut.png')]">
      <div className="p-5 h-full text-white bg-site-main bg-opacity-90">
        <h4 className="text-xl font-bold">{brandName ?? "Brand Name"}</h4>
        <h5 className="mt-2 text-[16px] font-bold">
          {heading ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum itaque provident."}
        </h5>
        <p className="text-[13px]">{readTime ?? "Takes 4 minutes to Read"}</p>
        <p className="mt-4 text-[14px]">
          {paragraph ??
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque totam cumque animi quos unde corporis, voluptatibus hic repellendus fugit architecto sint. Distinctio soluta odio quae qui eum ut laboriosam perferendis."}
        </p>
        <div className="mt-4">
          <MyButton btnName={btnName ?? ""} url={url ?? ""} Icon={Icon} />
        </div>
      </div>
    </div>
  );
};

export default RightCard;
