import RightCard from "@/app/_components/Dashboard/RightPanel/Card";
import { BookHeadphones } from "lucide-react";

const RightMenuPanel = () => {
  return (
    <div className=" bg-site-outer rounded-lg">
      <RightCard
        brandName="Arham Khan"
        heading=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum itaque provident."
        url="/learn-more"
        readTime="Takes 4 minutes to learn"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque totamcumque animi quos unde corporis, voluptatibus hic repellendus fugit
        architecto sint. Distinctio soluta odio quae qui eum ut laboriosam
        perferendis."
        btnName="Learn More"
        Icon={<BookHeadphones className="me-2  inline-block" />}
      />
      <RightCard />
      <RightCard />
    </div>
  );
};

export default RightMenuPanel;
