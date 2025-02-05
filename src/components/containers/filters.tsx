"use client";

import React, { useMemo, useState } from "react";
import { capitalize, cn } from "@/lib/utils";
import { CollapseMenu } from "../common";
import { CheckBox } from "../ui";
import ActiveFilters from "../common/active-filters";

interface Props {
  className?: string;
}

const filters = [
  { title: "Gender", options: ["men", "women", "unisex", "kids"] },
  { title: "Category", options: ["shirts", "pants", "shoes", "accessories"] },
  { title: "New" },
  { title: "Sale" },
  { title: "Best Sellers" },
  {
    title: "Price",
    options: [
      "$0 - $50",
      "$50 - $100",
      "$100 - $200",
      "$200 - $500",
      "$500 - $1000",
      "$1000+",
    ],
  },
  { title: "Size", options: ["XS", "S", "M", "L", "XL", "XXL"] },
];

const Filters: React.FC<Props> = ({ className = "" }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const onFilterChange = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const allFilters = useMemo(() => {
    return filters.map((filter, index) => {
      if (filter.hasOwnProperty("options")) {
        return (
          <CollapseMenu
            key={`${filter.title}-${index}`}
            title={filter.title}
            className="border-b-1 py-2"
          >
            {
              //@ts-expect-error - We check if options exist above
              filter?.options.map((option, index) => (
                <div
                  className="ml-2 items-center align-middle w-full flex gap-2"
                  key={`${option}-${index}`}
                >
                  <CheckBox
                    id={`${option.toLowerCase()}`}
                    onClick={() => onFilterChange(option)}
                    checked={activeFilters.includes(option)}
                  />
                  <label htmlFor={`${option}`}>{capitalize(option)}</label>
                </div>
              ))
            }
          </CollapseMenu>
        );
      }

      return (
        <div
          className="ml-2 items-center align-middle flex gap-2"
          key={`${filter.title}-${index}`}
        >
          <CheckBox
            id={`${filter.title.toLowerCase()}`}
            onClick={() => onFilterChange(filter.title)}
            checked={activeFilters.includes(filter.title)}
          />
          <label htmlFor={`${filter.title}`}>{filter.title}</label>
        </div>
      );
    });
  }, [activeFilters]);

  return (
    <div className={cn("space-y-3 w-[200px]", className)}>
      <ActiveFilters
        {...{
          activeFilters,
          setActiveFilters,
        }}
      />
      <div
        className={
          "flex justify-start h-full flex-col gap-1 overflow-y-auto overflow-x-hidden"
        }
      >
        {allFilters}
      </div>
    </div>
  );
};

export default Filters;
