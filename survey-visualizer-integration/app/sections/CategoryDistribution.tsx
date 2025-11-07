import { getGlobalCount } from "../api/client";
import { Category } from "../api/models";
import BarChart from "../components/BarChart";
import BaseSection from "../components/BaseSection";

interface Props {
  categories: Array<Category>
}

export default async function CategoryDistributionSection({categories}: Props) {
  const globalCount = await getGlobalCount();

  const data = Object.entries(globalCount?.categories ?? {}).map(([id, data]) => ({
    category: categories.filter((val) => val.id.toString() === id).at(0)?.name,
    ...data
  })).toSorted((a, b) => b.total_num_of_questions - a.total_num_of_questions);

  return (
    <BaseSection>
      <h2 className="text-2xl font-semibold text-center">Question Distribution by Category</h2>
      <div className="flex flex-col md:flex-row items-start">
        <div className="p-4 h-full w-full">
          <BarChart data={data} />
        </div>
        <div className="bg-white border-(length:--border) p-4 m-4 space-y-2">
          <h3 className="text-lg font-bold text-center">Filters</h3>
        </div>
      </div>
    </BaseSection>
  )
}
