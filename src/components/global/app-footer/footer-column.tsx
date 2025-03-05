import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

/**
 * A functional component that renders a column in the footer of the application.
 *
 * @param className - Additional class names to apply to the column container.
 * @param column - An object containing the title and links for the footer column.
 * @param column.title - The title of the footer column.
 * @param column.links - An array of link objects to be displayed in the footer column.
 * @param column.links[].href - The URL the link points to.
 * @param column.links[].title - The text to display for the link.
 *
 * @returns A JSX element representing a footer column with a title and a list of links.
 */
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
