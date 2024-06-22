import { Button } from "@/components/ui/button";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center ">
      <Button className=" bg-white hover:bg-zinc-100 text-black active:bg-zinc-300">
        Pevious
      </Button>
      <Button className=" bg-white hover:bg-zinc-100 text-black active:bg-zinc-300">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
