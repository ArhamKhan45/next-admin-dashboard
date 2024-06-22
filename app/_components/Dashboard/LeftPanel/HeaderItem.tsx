"use client";
import { headerItemProps } from "@/types/AdminDashboard/Dashboard.types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons/";

const HeaderItem: React.FC<headerItemProps> = ({ iconName, title, url }) => {
  const [IconComponent, setIconComponent] = useState<IconType | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconPack = iconName.slice(0, 2).toLowerCase();
        let iconModule: any = null;

        // Dynamically import the correct icon pack module based on iconPack
        switch (iconPack) {
          case "fa":
            iconModule = await import("react-icons/fa");
            break;
          case "fa6":
            iconModule = await import("react-icons/fa6");
            break;
          case "md":
            iconModule = await import("react-icons/md");
            break;
          case "bi":
            iconModule = await import("react-icons/bi");
            break;
          default:
            throw new Error(`Icon pack "${iconPack}" not supported`);
        }

        // Check if iconModule is not null or undefined
        if (iconModule) {
          const icon = iconModule[iconName] as IconType;
          setIconComponent(() => icon);
        } else {
          throw new Error(`Icon ${iconName} not found in ${iconPack}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadIcon();
  }, [iconName]);

  return (
    <div className="px-5 py-3 rounded-lg mb-4 hover:bg-site-light-grey">
      <Link className="font-medium" href={url ?? ""}>
        {IconComponent && <IconComponent className="me-4 inline-block" />}
        {title}
      </Link>
    </div>
  );
};

export default HeaderItem;
