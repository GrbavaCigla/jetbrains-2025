"use client";
import BaseSection from "../components/BaseSection";
import { useState, useEffect, useMemo } from "react";
import { Category, CategoryCountItem } from "../api/models";
import { getCategoryCount } from "../api/client";
import BarChart from "../components/BarChart";
import DifficultyBarChartSidebar from "../components/DifficultyBarChartSidebar";

interface Props {
  categories: Array<Category>;
  bottomMargin?: number;
  height?: number;
}

export default function DifficultyDistributionSection({
  categories,
  bottomMargin = 0,
  height = 600,
}: Props) {
  const [d, setD] = useState<(CategoryCountItem | null)[]>([]);
  const [selected, setSelected] = useState("all");
  const [isLoading, setLoading] = useState(true);

  const capitalize = (text: string) => {
    return text[0].toUpperCase() + text.substring(1);
  };

  const getGlobalData = () =>
    Object.entries(
      d
        .filter((val) => val !== null)
        .reduce((acc, cur) => {
          return {
            total_easy_question_count:
              acc!.total_easy_question_count + cur!.total_easy_question_count,
            total_medium_question_count:
              acc!.total_medium_question_count +
              cur!.total_medium_question_count,
            total_hard_question_count:
              acc!.total_hard_question_count + cur!.total_hard_question_count,
          } as CategoryCountItem;
        })
    ).map(([name, count]) => {
      return { category: capitalize(name.split("_")[1]), count: count };
    });

  useEffect(() => {
    Promise.all(categories.map((item) => getCategoryCount(item.id))).then(
      (data) => {
        setD(data);
        setLoading(false);
      }
    );
  }, []);

  const formattedData = useMemo(
    () =>
      d.length === 0
        ? []
        : selected === "all"
        ? getGlobalData()
        : [getGlobalData()[["easy", "medium", "hard"].indexOf(selected)]],
    [d, selected]
  );

  const handleChange = (val: string) => setSelected(val);

  return (
    <BaseSection>
      <h2 className="text-2xl font-semibold text-center">
        Question Distribution by Difficulty
      </h2>
      <div
        className="flex flex-col-reverse items-start md:flex-row"
        style={{ height: height }}
      >
        <div className="p-4 flex-1 h-full">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <span className="loading loading-spinner loading-xl" />
            </div>
          ) : (
            <BarChart
              data={formattedData}
              bottomMargin={bottomMargin}
              yoffset={height - 100 - bottomMargin - 32}
              fields={[
                {
                  dataKey: "count",
                  name: "Count",
                  fill: "var(--color-info)",
                },
              ]}
            />
          )}
        </div>
        <div className="m-4 shrink-0">
          <DifficultyBarChartSidebar onChange={handleChange} />
        </div>
      </div>
    </BaseSection>
  );
}
