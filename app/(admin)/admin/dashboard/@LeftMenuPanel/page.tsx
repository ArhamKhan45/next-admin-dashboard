// this page is the left panel of the dashboard

import HeaderItem from "@/app/_components/Dashboard/LeftPanel/HeaderItem";
import UserProfile from "@/app/_components/Dashboard/LeftPanel/UserProfile";
import headerData from "@/data/header_data.json";

const LeftMenuPanel = () => {
  return (
    <div className="px-4 py-5">
      {/* show profile */}
      <UserProfile />
      {/* icons with title menus */}
      {headerData.map((section, index) => (
        <div key={index}>
          <h4 className="font-semibold "> {section.category}</h4>
          {section.items.map((item, subIndex) => (
            <HeaderItem
              iconName={item?.iconName}
              title={item?.title}
              url={item?.url}
              key={`${index}-${subIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftMenuPanel;
