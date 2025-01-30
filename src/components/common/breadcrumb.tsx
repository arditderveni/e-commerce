"use client";

import React, { Fragment, useCallback, useMemo } from "react";
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Breadcrumb as Comp,
} from "../ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { capitalize } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Breadcrumb: React.FC = () => {
  const pathName = usePathname().split("/");

  const router = useRouter();

  const redirect = useCallback(
    (index: number, routes: string[]) => {
      router.push(`/${routes.slice(0, index + 1).join("/")}`);
    },
    [router]
  );

  const renderedCrumbs = useMemo(() => {
    if (pathName.length > 3) {
      const withoutLast = pathName
        .slice(0, pathName.length - 1)
        .filter(Boolean);

      return (
        <Fragment key={`crumb-fragment-${Math.floor(Math.random() * 100)}`}>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {withoutLast.map((item, index) => {
                  const key = `${item}-${index}-${Math.floor(
                    Math.random() * 100
                  )}`;
                  return (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => redirect(index, withoutLast)}
                    >
                      {capitalize(item)}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
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
  }, [pathName, redirect]);

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
