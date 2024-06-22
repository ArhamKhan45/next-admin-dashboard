import GetTheTitle from "@/app/_components/Dashboard/TitleNav/GetTheTitle";
import SearchBox from "@/app/_components/Dashboard/common/Search";
import { Bell, Earth, MessageSquareText } from "lucide-react";

const TitleNav: React.FC = () => {
  return (
    <div className=" px-4 py-5 my-5 bg-site-main w-full flex gap-5 items-center rounded-lg me-1">
      <div className="me-auto">
        <GetTheTitle />
      </div>
      <div className="w-[230px]">
        <SearchBox />
      </div>
      <div className="w-auto flex gap-8 ">
        <MessageSquareText /> <Earth /> <Bell />
      </div>
    </div>
  );
};
export default TitleNav;
