"use client";
import { sidebarLinks } from "@constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomBar = () => {
  const path = usePathname();
  return (
    <div className="flex bottom-0 w-full z-20 bg-dark-1 px-6 py-3 items-center justify-between md:hidden ">
      {sidebarLinks.map((links) => {
        const isActive = path === links.route;
        return (
          <Link
            key={links.label}
            href={links.route}
            className={` flex  items-center   rounded-lg py-2 px-4 ${
              isActive && "bg-purple-1"
            }`}
          >
            {links.icon}
            <p className="text-small text-light-1 max-sm:hidden">{links.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
