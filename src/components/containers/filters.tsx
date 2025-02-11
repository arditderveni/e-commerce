"use client";

import React, { useMemo, useState } from "react";
import { capitalize, cn } from "@/lib/utils";
import { CollapseMenu, ActiveFilters, LabeledCheckbox } from "../common";

interface Props {
  className?: string;
}

const filters = [
  { title: "Gender", options: ["men", "women", "unisex", "kids"] },
  { title: "Category", options: ["shirts", "pants", "shoes", "accessories"] },
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
  { title: "New" },
  { title: "Sale" },
  { title: "Best Sellers" },
];

const Filters: React.FC<Props> = ({ className = "" }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const onFilterChange = (filter: string, groupTitle?: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter);
      }
      if (groupTitle) {
        const group = filters.find((f) => f.title === groupTitle);
        if (group && group.options) {
          const newFilters = prev.filter((f) => !group.options.includes(f));
          return newFilters.includes(filter)
            ? newFilters
            : [...newFilters, filter];
        }
      }
      return [...prev, filter];
    });
  };

  const allFilters = useMemo(() => {
    return filters.map((filter, index) => {
      if (filter.hasOwnProperty("options")) {
        return (
          <CollapseMenu
            key={`${filter.title}-${index}`}
            title={filter.title}
            className="border-b-1 py-2 space-y-2"
            titleClassName="font-bold"
          >
            {
              //@ts-expect-error - We check if options exist above
              filter?.options.map((option, index) => (
                <LabeledCheckbox
                  key={`${option}-${index}`}
                  id={`${option.toLowerCase()}`}
                  onClick={() => onFilterChange(option, filter.title)}
                  checked={activeFilters.includes(option)}
                  variant="rounded"
                >
                  {capitalize(option)}
                </LabeledCheckbox>
              ))
            }
          </CollapseMenu>
        );
      }

      return (
        <LabeledCheckbox
          key={`${filter.title}-${index}`}
          id={`${filter.title.toLowerCase()}`}
          onClick={() => onFilterChange(filter.title)}
          checked={activeFilters.includes(filter.title)}
          variant="rounded"
        >
          {capitalize(filter.title)}
        </LabeledCheckbox>
      );
    });
  }, [activeFilters]);

  return (
    <div className={cn("space-y-3 w-[200px] pb-4", className)}>
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
