"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchBoxProps } from "@/types/common/Common.types";
import { Search } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

const SearchBox = ({
  searchCn,
  btnCn,
  myplaceholder,
  handler,
}: SearchBoxProps) => {
  const [keyword, setKeyword] = useState("");

  const keywordHandler = () => {
    handler && handler(keyword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Perform the search or any other action on Enter key press
      keywordHandler();
    }
  };
  return (
    <div
      className={`${
        searchCn
          ? `${searchCn} flex bg-site-light-grey`
          : "bg-site-light-grey w-full  flex rounded-lg "
      }`}
    >
      <Button
        onClick={keywordHandler}
        className={`${
          btnCn
            ? btnCn
            : "bg-site-light-grey hover:bg-site-light-grey active:bg-site-outer "
        }`}
      >
        <Search size={16} />
      </Button>
      <Input
        type="text"
        placeholder={myplaceholder ?? "Search"}
        className="bg-site-light-grey border-none outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-[5px]"
        onChange={handleChange}
        value={keyword ?? ""}
        onKeyDown={handleEnterKeyDown}
      />
    </div>
  );
};

export default SearchBox;
