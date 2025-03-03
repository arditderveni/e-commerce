"use client";

import React, { Fragment, useMemo } from "react";
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Breadcrumb as Comp,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { capitalize } from "@/lib/utils";
import DropdownMenu from "./dropdown-menu";

/**
 * Breadcrumb component that generates a breadcrumb navigation based on the current pathname.
 *
 * @returns A React functional component that renders the breadcrumb navigation.
 *
 * @remarks
 * - Uses `usePathname` to get the current pathname and splits it into segments.
 * - Uses `useMemo` to memoize the rendered breadcrumb items for performance optimization.
 * - If the pathname has more than 3 segments, it renders a dropdown menu for the intermediate segments.
 * - Capitalizes each segment for display purposes.
 * - The last segment is rendered as plain text, while the intermediate segments are rendered as links.
 *
 * @example
 * ```tsx
 * <Breadcrumb />
 * ```
 */
const Breadcrumb: React.FC = () => {
  const pathName = usePathname().split("/");

  const renderedCrumbs = useMemo(() => {
    if (pathName.length > 3) {
      const withoutLast = pathName
        .slice(0, pathName.length - 1)
        .filter(Boolean);

      return (
        <Fragment key={`crumb-fragment-${Math.floor(Math.random() * 100)}`}>
          <BreadcrumbItem>
            <DropdownMenu
              className="flex items-center gap-1"
              trigger={<BreadcrumbEllipsis className="h-4 w-4" />}
              options={withoutLast.map((item) => capitalize(item))}
              dir="ltr"
            />
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            {capitalize(pathName[pathName.length - 1])}
          </BreadcrumbItem>
        </Fragment>
      );
    }

    return pathName.map((item, index) => {
      const key = `${item}-${index}-${Math.floor(Math.random() * 100)}`;

      if (index === pathName.length - 1) {
        return <BreadcrumbItem key={key}>{capitalize(item)}</BreadcrumbItem>;
      }

      return (
        <Fragment key={key}>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${item}`}>
              {capitalize(item)}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </Fragment>
      );
    });
  }, [pathName]);

  return (
    <Comp>
      <BreadcrumbList key={"breadcrumb-list"}>
        <BreadcrumbItem key={"home-breadcrumb"}>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {renderedCrumbs}
      </BreadcrumbList>
    </Comp>
  );
};

export default Breadcrumb;
