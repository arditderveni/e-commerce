import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const FooterColumn: React.FC<FooterColumnProps> = ({ className, column }) => {
  const { title, links } = column;

  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index} className="hover:scale-105 transition-all">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
