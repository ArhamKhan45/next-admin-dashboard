"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => {
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };
  // Prevent propagation of click events from child to parent
  const stopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div className="mb-[20px] flex items-center gap-4 select-none">
      <Image
        src={"/dashboard/default-user.jpg"}
        width={0}
        height={0}
        quality={75}
        sizes="100vw"
        className="w-[60px] h-[60px] rounded-[50%]  "
        alt="User-image"
        priority
        onClick={openOverlay}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center "
          onClick={closeOverlay}
        >
          <div className="relative  min-w-full min-h-full flex justify-center items-center ">
            <Image
              src={"/dashboard/default-user.jpg"}
              width={0}
              height={0}
              quality={100}
              sizes="100vw"
              priority
              className="w-[auto] h-[auto] object-contain rounded-lg "
              alt="User-image"
              onClick={stopPropagation}
            />

            <button
              className="absolute top-0 right-3 text-white text-[40px]"
              onClick={closeOverlay}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="">
        <h3 className="text-lg font-semibold"> User1</h3>
        <p className="text-sm">Adminstrator</p>
      </div>
    </div>
  );
};

export default UserProfile;
