"use client"
import CategoryBarChartSidebar from "./CategoryBarChartSidebar";
import { GlobalCountItem } from "../api/models";
import BarChart from "./BarChart";
import { useState } from "react";

interface DataItem extends GlobalCountItem {
  category: string | undefined;
};

interface Props {
  data: DataItem[];
}

export default function CategoryBarChart({ data }: Props) {
  const [d, setD] = useState(data);

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

  const onSidebarChange = (groupChecked: boolean) => setD(groupChecked ? groupedData : data);

  return (
    <div className="flex flex-col-reverse items-stretch md:flex-row md:items-start">
      <div className="p-4 h-full w-full">
        <BarChart data={d} />
      </div>
      <div className="m-4">
        <CategoryBarChartSidebar defaultGroupChecked={false} onChange={onSidebarChange} />
      </div>
    </div>
  );
}

