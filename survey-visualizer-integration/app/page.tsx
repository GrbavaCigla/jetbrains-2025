import { getCategories } from "@/app/api/client";

import CategoryDistributionSection from "./sections/CategoryDistribution";
import CategoryListSection from "./sections/CategoryList";

export default async function Home() {
  const categories = (await getCategories()) ?? [];

  return (
    <main>
      <CategoryListSection categories={categories} />
      <CategoryDistributionSection categories={categories} />
    </main>
  );
}
