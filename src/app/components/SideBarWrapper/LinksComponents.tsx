"use client";
import {
  ArrowLeftStartOnRectangleIcon,
  CodeBracketSquareIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinksComponents = () => {
  const pathname = usePathname();
  const links: { title: string; href: string; icon: JSX.Element }[] = [
    {
      title: "All Snippets",
      href: "/all-code-snippets",
      icon: (
        <>
          <CodeBracketSquareIcon className="w-4 h-4" />
        </>
      ),
    },
    {
      title: "Server",
      href: "/server",
      icon: (
        <>
          <ServerStackIcon className="w-4 h-4" />
        </>
      ),
    },
    {
      title: "Log Out",
      href: "/logout",
      icon: (
        <>
          <ArrowLeftStartOnRectangleIcon className="w-4 h-4 rotate-180" />
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col w-full gap-2">
      <h1 className="text-sm font-medium text-neutral-500 mb-2">Quick Links</h1>
      {links?.map((item) => (
        <Link
          className={`w-34/5 text-sm px-4 py-2 rounded-md flex gap-2 items-center ${
            pathname === item?.href || pathname.startsWith(item?.href)
              ? "text-purple-50 bg-purple-500"
              : "text-neutral-500 bg-transparent"
          }`}
          href={item?.href}
          key={item?.title}
        >
          {item?.icon}
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default LinksComponents;
