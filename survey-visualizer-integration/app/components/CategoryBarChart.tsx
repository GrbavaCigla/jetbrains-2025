"use client"
import CategoryBarChartSidebar from "./CategoryBarChartSidebar";
import { GlobalCountItem } from "../api/models";
import BarChart from "./BarChart";
import { useState } from "react";

interface DataItem extends GlobalCountItem {
  category: string | undefined;
};

interface Props {
  height?: number;
  data: DataItem[];
}

export default function CategoryBarChart({ data, height = 600 }: Props) {
  const [d, setD] = useState(data);
  const [grpChecked, setGrpChecked] = useState(false);

  const getGroupedData = () => {
    const grouped: Record<string, DataItem> = {};

    for (const item of data) {
      const parts = item.category?.split(":") ?? "";
      const mainCategory = parts[0].trim();

      if (!grouped[mainCategory]) {
        grouped[mainCategory] = {
          category: mainCategory,
          total_num_of_questions: 0,
          total_num_of_pending_questions: 0,
          total_num_of_verified_questions: 0,
          total_num_of_rejected_questions: 0,
        };
      }

      grouped[mainCategory].total_num_of_questions += item.total_num_of_questions;
      grouped[mainCategory].total_num_of_pending_questions += item.total_num_of_pending_questions;
      grouped[mainCategory].total_num_of_verified_questions += item.total_num_of_verified_questions;
      grouped[mainCategory].total_num_of_rejected_questions += item.total_num_of_rejected_questions;
    }
    return Object.values(grouped).toSorted((a, b) => b.total_num_of_questions - a.total_num_of_questions);
  }

  const groupedData = getGroupedData();

  const onSidebarChange = (groupChecked: boolean, categories: string[]) => {
    if (grpChecked !== groupChecked) setGrpChecked(groupChecked);
    setD(
      (groupChecked ? groupedData : data)
        .filter((val) => val.category !== undefined && categories.includes(val.category))
    );
  }

  return (
    <div className="flex flex-col-reverse items-stretch md:flex-row" style={{height: height}}>
      <div className="p-4 flex-1">
        {/* 32=16*2 comes from padding p-4 */}
        <BarChart data={d} yoffset={height - 200 - 32} />
      </div>
      <div className="m-4 shrink-0">
        <CategoryBarChartSidebar
          defaultGroupChecked={grpChecked}
          onChange={onSidebarChange}
          categories={(grpChecked ? groupedData : data).map((val) => val.category).filter((val) => val !== undefined).toSorted()}
        />
      </div>
    </div>
  );
}

