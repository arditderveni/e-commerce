"use client";

import React from "react";
import FooterColumn from "./footer-column";
import { cn } from "@/lib/utils";
import SmallPrint from "@/components/common/fine-print";
import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks";

const Logo = ({ className }: { className: string }) => (
  <div className={cn("text-xl font-bold", className)}>Logo</div>
);

const footerLinks: FooterColumn[] = [
  {
    title: "Footer Link",
    links: [
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
    ],
  },
  {
    title: "Footer Link",
    links: [
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
    ],
  },
  {
    title: "Footer Link",
    links: [
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
      {
        title: "Footer Link",
        href: "/",
      },
    ],
  },
];

const smallPrint = [
  "© 2021 Company Name",
  "Privacy Policy",
  "Terms of Service",
];

const MobileFooter = dynamic(() => import("@/components/global/mobile-footer"));

const AppFooter: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileFooter />;
  }

  return (
    <footer className="bg-header-background mt-auto p-4 divide-y-1 space-y-4 border-t-inherit ">
      <div className="flex justify-between">
        <Logo className="self-start" />
        <div className="flex justify-evenly w-full">
          {footerLinks.map((column, index) => (
            <FooterColumn
              key={index}
              // className="flex flex-col space-y-2"
              column={column}
            />
          ))}
        </div>
      </div>
      <div className="text-center flex justify-start space-x-4 pt-4 text-xs">
        {smallPrint.map((text, index) => (
          <SmallPrint
            key={`smallPrint-${text}-${index}`}
            className="underline underline-offset-4 hover:scale-105 transition-all cursor-pointer"
          >
            {text}
          </SmallPrint>
        ))}
      </div>
    </footer>
  );
};

export default AppFooter;
