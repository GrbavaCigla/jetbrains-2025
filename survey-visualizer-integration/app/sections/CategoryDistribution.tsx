import { getGlobalCount } from "../api/client";
import { Category } from "../api/models";
import BaseSection from "../components/BaseSection";
import CategoryBarChart from "../components/CategoryBarChart";

interface Props {
  categories: Array<Category>;
}

export default async function CategoryDistributionSection({
  categories,
}: Props) {
  const globalCount = await getGlobalCount();

  const data = Object.entries(globalCount?.categories ?? {})
    .map(([id, data]) => ({
      category: categories.filter((val) => val.id.toString() === id).at(0)
        ?.name,
      ...data,
    }))
    .toSorted((a, b) => b.total_num_of_questions - a.total_num_of_questions);

  return (
    <BaseSection>
      <h2 className="text-2xl font-semibold text-center">
        Question Distribution by Category
      </h2>
      <CategoryBarChart data={data} />
    </BaseSection>
  );
}
